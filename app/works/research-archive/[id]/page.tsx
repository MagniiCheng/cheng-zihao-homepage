import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getResearchArchiveById, getResearchArchives } from "@/lib/research-archive";
import { siteConfig } from "@/lib/site-data";

type ResearchArchiveDetailProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getResearchArchives().map((entry) => ({
    id: entry.id
  }));
}

export async function generateMetadata({ params }: ResearchArchiveDetailProps): Promise<Metadata> {
  const { id } = await params;
  const entry = getResearchArchiveById(id);

  if (!entry) {
    return {
      title: "档案不存在 | Research Archive"
    };
  }

  return {
    title: `${entry.displayId} ${entry.title} | Research Archive`,
    description: entry.summary,
    openGraph: {
      title: `${entry.displayId} ${entry.title}`,
      description: entry.summary,
      url: `${siteConfig.url}${entry.detailHref}`,
      images: [entry.cover]
    },
    twitter: {
      card: "summary_large_image",
      title: `${entry.displayId} ${entry.title}`,
      description: entry.summary,
      images: [entry.cover]
    }
  };
}

function MarkdownBlock({ source }: { source: string }) {
  const lines = source.split("\n");
  const blocks: React.ReactNode[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];

  function flushParagraph() {
    if (!paragraph.length) {
      return;
    }

    blocks.push(
      <p key={`p-${blocks.length}`} className="text-lg leading-[2] text-[#333333] sm:text-xl">
        {paragraph.join(" ")}
      </p>
    );
    paragraph = [];
  }

  function flushList() {
    if (!list.length) {
      return;
    }

    blocks.push(
      <ul key={`ul-${blocks.length}`} className="grid gap-3 text-base leading-8 text-[#6D706D]">
        {list.map((item) => (
          <li key={item} className="border-l border-[#E4E5E2] pl-4">
            {item}
          </li>
        ))}
      </ul>
    );
    list = [];
  }

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph();
      flushList();
      return;
    }

    if (trimmed.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push(
        <h3 key={`h3-${blocks.length}`} className="pt-8 text-2xl font-semibold tracking-[-0.03em] text-[#151515]">
          {trimmed.replace(/^##\s+/, "")}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith("- ")) {
      flushParagraph();
      list.push(trimmed.replace(/^-\s+/, ""));
      return;
    }

    flushList();
    paragraph.push(trimmed);
  });

  flushParagraph();
  flushList();

  return <div className="grid gap-7">{blocks}</div>;
}

function ContentSection({
  title,
  english,
  children
}: {
  title: string;
  english: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[36px] border border-[#E4E5E2] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-12">
      <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#151515]">{title}</h2>
        <p className="text-sm text-[#8A8C88]">{english}</p>
      </div>
      {children}
    </section>
  );
}

export default async function ResearchArchiveDetailPage({ params }: ResearchArchiveDetailProps) {
  const { id } = await params;
  const archives = getResearchArchives();
  const entryIndex = archives.findIndex((item) => item.id === id);
  const entry = archives[entryIndex];

  if (!entry) {
    notFound();
  }

  const newer = entryIndex > 0 ? archives[entryIndex - 1] : null;
  const older = entryIndex < archives.length - 1 ? archives[entryIndex + 1] : null;

  return (
    <main className="min-h-screen bg-[#F6F5F2] px-5 pb-20 pt-24 text-[#151515] sm:px-8 lg:px-12">
      <article className="mx-auto grid max-w-[1120px] gap-6">
        <Link
          href="/works/research-archive"
          className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#6D706D] transition hover:text-[#151515]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回调查档案
        </Link>

        <header className="grid gap-10 rounded-[36px] border border-[#E4E5E2] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-12 lg:grid-cols-[1.05fr_0.8fr] lg:p-14">
          <div className="flex flex-col justify-between gap-12">
            <div>
              <p className="text-2xl font-semibold tracking-[-0.04em] text-[#155F36]">{entry.displayId}</p>
              <h1 className="mt-6 text-balance text-[clamp(42px,7vw,86px)] font-[720] leading-[0.98] tracking-[-0.08em] text-[#151515]">
                {entry.title}
              </h1>
              {entry.subtitle ? (
                <p className="mt-6 max-w-2xl text-xl leading-[1.7] text-[#6D706D]">{entry.subtitle}</p>
              ) : null}
            </div>

            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <p className="text-sm text-[#8A8C88]">发布日期</p>
                <p className="mt-2 text-base font-semibold text-[#151515]">{entry.publishDate}</p>
              </div>
              <div>
                <p className="text-sm text-[#8A8C88]">状态</p>
                <p className="mt-2 text-base font-semibold capitalize text-[#151515]">{entry.status}</p>
              </div>
              <div>
                <p className="text-sm text-[#8A8C88]">系列</p>
                <p className="mt-2 text-base font-semibold text-[#151515]">{entry.series || "未归档"}</p>
              </div>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[28px] border border-[#E4E5E2] bg-[#F6F5F2]">
            <img src={entry.cover} alt={`${entry.displayId} ${entry.title}`} className="w-full object-cover" />
          </figure>

          <div className="flex flex-wrap gap-2 lg:col-span-2">
            {entry.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[rgba(21,95,54,0.08)] px-3 py-1 text-xs font-medium text-[#155F36]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {entry.summaryMarkdown ? (
          <ContentSection title="摘要" english="Summary">
            <MarkdownBlock source={entry.summaryMarkdown} />
          </ContentSection>
        ) : null}

        {entry.researchMarkdown ? (
          <ContentSection title="研究正文" english="Research">
            <MarkdownBlock source={entry.researchMarkdown} />
          </ContentSection>
        ) : null}

        {entry.evidence.length ? (
          <ContentSection title="证据" english="Evidence">
            <div className="grid gap-4">
              {entry.evidence.map((item) => (
                <div key={item.id} className="rounded-[24px] border border-[#E4E5E2] bg-[#F6F5F2] p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#155F36]">{item.id}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#151515]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-medium text-[#6D706D]">
                      {item.type}
                    </span>
                  </div>
                  <p className="mt-5 text-base leading-[1.9] text-[#333333]">{item.description}</p>
                  <p className="mt-5 text-sm leading-7 text-[#6D706D]">来源：{item.source}</p>
                  {item.relatedPages.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.relatedPages.map((page) => (
                        <span
                          key={page}
                          className="rounded-full bg-[rgba(21,95,54,0.08)] px-3 py-1 text-xs font-medium text-[#155F36]"
                        >
                          {page}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </ContentSection>
        ) : null}

        <ContentSection title="完整档案" english="Full Archive">
          <div className="grid gap-8">
            {entry.images.map((image, index) => (
              <figure
                key={image}
                className="mx-auto w-full max-w-[720px] overflow-hidden rounded-[24px] border border-[#E4E5E2] bg-[#F6F5F2]"
              >
                <img
                  src={image}
                  alt={`${entry.displayId} ${entry.title} P${index + 1}`}
                  className="w-full object-contain"
                />
              </figure>
            ))}
          </div>
        </ContentSection>

        {entry.referencesMarkdown ? (
          <ContentSection title="参考资料" english="References">
            <MarkdownBlock source={entry.referencesMarkdown} />
          </ContentSection>
        ) : null}

        <section className="rounded-[36px] border border-[#E4E5E2] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-10">
          <div className="grid gap-6 sm:grid-cols-4">
            <div>
              <p className="text-sm text-[#8A8C88]">作者</p>
              <p className="mt-3 text-lg font-semibold text-[#151515]">{entry.author}</p>
            </div>
            <div>
              <p className="text-sm text-[#8A8C88]">更新时间</p>
              <p className="mt-3 text-lg font-semibold text-[#151515]">{entry.updatedAt}</p>
            </div>
            <div>
              <p className="text-sm text-[#8A8C88]">图片页数</p>
              <p className="mt-3 text-lg font-semibold text-[#151515]">{entry.pages}</p>
            </div>
            <div>
              <p className="text-sm text-[#8A8C88]">平台</p>
              <p className="mt-3 text-lg font-semibold text-[#151515]">
                {entry.platform.length ? entry.platform.join(" / ") : "TODO"}
              </p>
            </div>
          </div>
        </section>

        <nav className="grid gap-4 sm:grid-cols-2">
          {older ? (
            <Link
              href={older.detailHref}
              className="rounded-[28px] border border-[#E4E5E2] bg-white p-6 text-[#151515] shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:border-[rgba(21,95,54,0.28)]"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-[#6D706D]">
                <ArrowLeft className="h-4 w-4" />
                上一篇
              </span>
              <p className="mt-4 text-xl font-semibold leading-snug tracking-[-0.03em]">{older.title}</p>
            </Link>
          ) : (
            <div />
          )}

          {newer ? (
            <Link
              href={newer.detailHref}
              className="rounded-[28px] border border-[#E4E5E2] bg-white p-6 text-right text-[#151515] shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:border-[rgba(21,95,54,0.28)]"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#6D706D]">
                下一篇
                <ArrowRight className="h-4 w-4" />
              </span>
              <p className="mt-4 text-xl font-semibold leading-snug tracking-[-0.03em]">{newer.title}</p>
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
