import { existsSync, readdirSync, readFileSync, statSync } from "fs";
import path from "path";

type RawMetadata = {
  id?: string;
  title?: string;
  subtitle?: string | null;
  slug?: string | null;
  status?: string | null;
  author?: string | null;
  publish_date?: string;
  last_updated?: string | null;
  platform?: string[];
  series?: string | null;
  tags?: string[];
  cover?: string | null;
  pages?: number | null;
  featured?: boolean | null;
  summary?: string | null;
};

type LegacyManifest = {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
};

export type ResearchEvidence = {
  id: string;
  type: string;
  title: string;
  source: string;
  description: string;
  relatedPages: string[];
};

export type ResearchArchiveEntry = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  status: string;
  author: string;
  publishDate: string;
  date: string;
  lastUpdated: string;
  platform: string[];
  series: string;
  tags: string[];
  cover: string;
  pages: number;
  featured: boolean;
  summary: string;
  summaryMarkdown: string;
  researchMarkdown: string;
  referencesMarkdown: string;
  evidence: ResearchEvidence[];
  displayId: string;
  year: string;
  dateLabel: string;
  updatedAt: string;
  images: string[];
  detailHref: string;
  imageCount: number;
  sourceDir: string;
  sourceKind: "standard" | "legacy";
};

const externalArchiveRoot = "/Users/mg/Documents/XHS/调查档案";
const legacyArchiveRoot = path.join(
  /*turbopackIgnore: true*/ process.cwd(),
  "XHS",
  "ResearchArchive"
);

export const researchArchiveRoot = existsSync(externalArchiveRoot)
  ? externalArchiveRoot
  : legacyArchiveRoot;

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"]);

function isImage(file: string) {
  return imageExtensions.has(path.extname(file).toLowerCase());
}

function naturalCompare(a: string, b: string) {
  return a.localeCompare(b, "zh-CN", { numeric: true, sensitivity: "base" });
}

function readText(filePath: string) {
  if (!existsSync(filePath)) {
    return "";
  }

  return readFileSync(filePath, "utf8").trim();
}

function getFileModifiedDate(filePath: string) {
  try {
    return statSync(filePath).mtime.toISOString().slice(0, 10);
  } catch {
    return "";
  }
}

function stripQuotes(value: string) {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

function parseYamlScalar(value: string): string | number | boolean | null {
  const raw = value.trim();
  const isQuoted =
    (raw.startsWith('"') && raw.endsWith('"')) ||
    (raw.startsWith("'") && raw.endsWith("'"));
  const trimmed = stripQuotes(value);

  if (!trimmed || trimmed === "null") {
    return null;
  }

  if (isQuoted) {
    return trimmed;
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed);
  }

  return trimmed;
}

function parseMetadataYaml(source: string): RawMetadata | null {
  const data: Record<string, string | number | boolean | null | string[]> = {};
  const lines = source.split("\n");
  let activeArrayKey: string | null = null;

  for (const line of lines) {
    if (!line.trim() || line.trim().startsWith("#")) {
      continue;
    }

    const arrayMatch = line.match(/^\s+-\s+(.+)$/);

    if (arrayMatch && activeArrayKey) {
      const current = data[activeArrayKey];
      data[activeArrayKey] = Array.isArray(current)
        ? [...current, String(parseYamlScalar(arrayMatch[1]) ?? "")]
        : [String(parseYamlScalar(arrayMatch[1]) ?? "")];
      continue;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);

    if (!keyMatch) {
      continue;
    }

    const [, key, value] = keyMatch;

    if (!value) {
      data[key] = [];
      activeArrayKey = key;
      continue;
    }

    data[key] = parseYamlScalar(value);
    activeArrayKey = null;
  }

  if (!data.id || !data.title || !data.publish_date) {
    return null;
  }

  return data as RawMetadata;
}

function parseEvidenceYaml(source: string): ResearchEvidence[] {
  const evidence: ResearchEvidence[] = [];
  const lines = source.split("\n");
  let current: Partial<ResearchEvidence> | null = null;
  let readingRelatedPages = false;

  function commitCurrent() {
    if (!current) {
      return;
    }

    if (current.id && current.title) {
      evidence.push({
        id: current.id,
        type: current.type ?? "unknown",
        title: current.title,
        source: current.source ?? "TODO",
        description: current.description ?? "",
        relatedPages: current.relatedPages ?? []
      });
    }

    current = null;
  }

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed || trimmed === "evidence:") {
      continue;
    }

    const itemMatch = line.match(/^\s+-\s+id:\s*(.+)$/);

    if (itemMatch) {
      commitCurrent();
      current = {
        id: String(parseYamlScalar(itemMatch[1]) ?? ""),
        relatedPages: []
      };
      readingRelatedPages = false;
      continue;
    }

    if (!current) {
      continue;
    }

    const relatedPageMatch = line.match(/^\s+-\s+(.+)$/);

    if (readingRelatedPages && relatedPageMatch) {
      current.relatedPages = [
        ...(current.relatedPages ?? []),
        String(parseYamlScalar(relatedPageMatch[1]) ?? "")
      ];
      continue;
    }

    const keyMatch = line.match(/^\s+([A-Za-z0-9_]+):\s*(.*)$/);

    if (!keyMatch) {
      continue;
    }

    const [, key, value] = keyMatch;

    if (key === "related_pages") {
      readingRelatedPages = true;
      current.relatedPages = [];
      continue;
    }

    readingRelatedPages = false;

    if (key === "type" || key === "title" || key === "source" || key === "description") {
      current[key] = String(parseYamlScalar(value) ?? "");
    }
  }

  commitCurrent();
  return evidence;
}

function readJson(filePath: string): LegacyManifest | null {
  try {
    const raw = readFileSync(filePath, "utf8");
    const manifest = JSON.parse(raw) as LegacyManifest;

    if (!manifest.id || !manifest.title || !manifest.summary || !manifest.date) {
      return null;
    }

    return {
      ...manifest,
      id: String(manifest.id).padStart(3, "0"),
      tags: Array.isArray(manifest.tags) ? manifest.tags.slice(0, 3) : []
    };
  } catch {
    return null;
  }
}

function getAssetUrl(id: string, relativeFilePath: string) {
  return `/research-archive-assets/${id}/${relativeFilePath
    .split(path.sep)
    .map(encodeURIComponent)
    .join("/")}`;
}

function readImages(entryDir: string, id: string, folder = "assets") {
  const imageDir = path.join(entryDir, folder);

  if (!existsSync(imageDir)) {
    return [];
  }

  return readdirSync(imageDir)
    .filter(isImage)
    .sort(naturalCompare)
    .map((file) => getAssetUrl(id, path.join(folder, file)));
}

function readCover(id: string, metadataCover: string | null | undefined, images: string[]) {
  if (metadataCover) {
    return getAssetUrl(id, metadataCover);
  }

  const p1 = images.find((image) => /\/P?0?1\.[a-z0-9]+$/i.test(image));
  return p1 ?? images[0] ?? "/mg/mg-placeholder.svg";
}

function normalizeMarkdownBody(source: string) {
  return source.trim();
}

function readStandardEntry(entryDir: string): ResearchArchiveEntry | null {
  const metadataPath = path.join(entryDir, "metadata.yaml");
  const metadata = parseMetadataYaml(readText(metadataPath));

  if (!metadata?.id || !metadata.title || !metadata.publish_date) {
    return null;
  }

  const id = metadata.id;
  const images = readImages(entryDir, id, "assets");
  const summaryMarkdown = normalizeMarkdownBody(readText(path.join(entryDir, "summary.md")));
  const researchMarkdown = normalizeMarkdownBody(readText(path.join(entryDir, "research.md")));
  const referencesMarkdown = normalizeMarkdownBody(readText(path.join(entryDir, "references.md")));
  const evidence = parseEvidenceYaml(readText(path.join(entryDir, "evidence.yaml")));
  const summary = metadata.summary ?? summaryMarkdown.replace(/^#\s+摘要\s*/m, "").trim().split("\n")[0] ?? "";
  const lastUpdated = metadata.last_updated ?? getFileModifiedDate(metadataPath) ?? metadata.publish_date;

  return {
    id,
    title: metadata.title,
    subtitle: metadata.subtitle ?? "",
    slug: metadata.slug ?? id,
    status: metadata.status ?? "draft",
    author: metadata.author ?? "Magnii",
    publishDate: metadata.publish_date,
    date: metadata.publish_date,
    lastUpdated,
    platform: metadata.platform ?? [],
    series: metadata.series ?? "",
    tags: metadata.tags ?? [],
    cover: readCover(id, metadata.cover, images),
    pages: metadata.pages ?? images.length,
    featured: Boolean(metadata.featured),
    summary,
    summaryMarkdown,
    researchMarkdown,
    referencesMarkdown,
    evidence,
    displayId: `#${id}`,
    year: metadata.publish_date.slice(0, 4),
    dateLabel: metadata.publish_date.slice(0, 7).replace("-", "."),
    updatedAt: lastUpdated,
    images,
    detailHref: `/works/research-archive/${id}`,
    imageCount: images.length,
    sourceDir: entryDir,
    sourceKind: "standard"
  };
}

function readLegacyEntry(entryDir: string): ResearchArchiveEntry | null {
  const manifest = readJson(path.join(entryDir, "manifest.json"));

  if (!manifest) {
    return null;
  }

  const images = readImages(entryDir, manifest.id, "images");
  const article = readText(path.join(entryDir, "article.md"));

  return {
    id: manifest.id,
    title: manifest.title,
    subtitle: "",
    slug: manifest.id,
    status: "published",
    author: "Magnii",
    publishDate: manifest.date,
    date: manifest.date,
    lastUpdated: getFileModifiedDate(path.join(entryDir, "manifest.json")) || manifest.date,
    platform: ["xiaohongshu"],
    series: "",
    tags: manifest.tags,
    cover: readCover(manifest.id, null, images),
    pages: images.length,
    featured: false,
    summary: manifest.summary,
    summaryMarkdown: manifest.summary,
    researchMarkdown: article,
    referencesMarkdown: "",
    evidence: [],
    displayId: `#${manifest.id}`,
    year: manifest.date.slice(0, 4),
    dateLabel: manifest.date.slice(0, 7).replace("-", "."),
    updatedAt: getFileModifiedDate(path.join(entryDir, "manifest.json")) || manifest.date,
    images,
    detailHref: `/works/research-archive/${manifest.id}`,
    imageCount: images.length,
    sourceDir: entryDir,
    sourceKind: "legacy"
  };
}

function readEntriesFromRoot(root: string, kind: "standard" | "legacy") {
  if (!existsSync(root)) {
    return [];
  }

  return readdirSync(root)
    .filter((entry) => {
      const entryPath = path.join(root, entry);
      return existsSync(entryPath) && statSync(entryPath).isDirectory();
    })
    .map((folder) => {
      const entryDir = path.join(root, folder);
      return kind === "standard" ? readStandardEntry(entryDir) : readLegacyEntry(entryDir);
    })
    .filter((entry): entry is ResearchArchiveEntry => Boolean(entry));
}

export function getResearchArchives(): ResearchArchiveEntry[] {
  const entriesById = new Map<string, ResearchArchiveEntry>();

  for (const entry of readEntriesFromRoot(externalArchiveRoot, "standard")) {
    entriesById.set(entry.id, entry);
  }

  for (const entry of readEntriesFromRoot(legacyArchiveRoot, "legacy")) {
    if (!entriesById.has(entry.id)) {
      entriesById.set(entry.id, entry);
    }
  }

  return Array.from(entriesById.values()).sort((a, b) => {
    const dateSort = b.publishDate.localeCompare(a.publishDate);
    return dateSort === 0 ? b.id.localeCompare(a.id) : dateSort;
  });
}

export function getResearchArchiveById(id: string) {
  return getResearchArchives().find((entry) => entry.id === id);
}

export function getResearchArchiveTags(entries = getResearchArchives()) {
  return Array.from(new Set(entries.flatMap((entry) => entry.tags))).sort(naturalCompare);
}

export function getResearchArchiveAssetPath(id: string, segments: string[]) {
  const entry = getResearchArchiveById(id);

  if (!entry || !segments.length) {
    return null;
  }

  const filePath = path.resolve(entry.sourceDir, ...segments);
  const root = path.resolve(entry.sourceDir);

  if (!filePath.startsWith(`${root}${path.sep}`)) {
    return null;
  }

  return filePath;
}
