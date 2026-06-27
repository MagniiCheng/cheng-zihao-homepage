import { readFile } from "fs/promises";
import { NextResponse } from "next/server";
import { getResearchArchiveAssetPath } from "@/lib/research-archive";

type AssetRouteProps = {
  params: Promise<{ path: string[] }>;
};

const contentTypes: Record<string, string> = {
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

export async function GET(_request: Request, { params }: AssetRouteProps) {
  const { path: segments } = await params;

  if (!segments?.length || segments.length < 2) {
    return new NextResponse("Not found", { status: 404 });
  }

  const [id, ...assetSegments] = segments;
  const filePath = getResearchArchiveAssetPath(id, assetSegments);

  if (!filePath) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const file = await readFile(filePath);
    const extension = filePath.slice(filePath.lastIndexOf(".")).toLowerCase();
    const contentType = contentTypes[extension] ?? "application/octet-stream";

    return new NextResponse(file, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Type": contentType
      }
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
