import type { Metadata } from "next";
import { Download, Eye, FolderDown } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { resourceCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "资源中心 | Magnii",
  description: "Magnii个人品牌官网资源中心，统一管理调查档案 PDF、知乎文章合集、虎虎豹豹表情包、简历和作品集。"
};

export default function ResourcesPage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <SectionHeader
          eyebrow="Resources"
          title="资源中心"
          description="调查档案 PDF、知乎文章合集、虎虎豹豹表情包、个人简历和作品集统一放在这里。"
        />

        <div className="grid gap-6">
          {resourceCategories.map((category) => (
            <section key={category.id} id={category.id} className="quiet-card rounded-lg p-6">
              <div className="mb-5 flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[rgba(var(--accent),0.12)] text-[rgb(var(--accent))]">
                  <FolderDown className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-black text-[rgb(var(--foreground))]">
                  {category.title}
                </h2>
              </div>

              <div className="grid gap-3">
                {category.items.map((item) => (
                  <article
                    key={`${category.id}-${item.title}`}
                    className="grid gap-4 rounded-lg border border-[rgba(var(--line),0.78)] bg-[rgba(var(--surface-strong),0.45)] p-4 md:grid-cols-[1fr_auto]"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-black text-[rgb(var(--foreground))]">
                          {item.title}
                        </h3>
                        <span className="rounded-full bg-[rgba(var(--foreground),0.06)] px-3 py-1 text-xs font-black text-[rgb(var(--muted))]">
                          {item.type}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-[rgb(var(--muted))]">
                        {item.size} · 更新于 {item.updatedAt}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[rgba(var(--line),0.9)] px-4 py-2 text-sm font-black text-[rgb(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent),0.45)]"
                      >
                        查看
                        <Eye className="h-4 w-4" />
                      </a>
                      <a
                        href={item.href}
                        download
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[rgb(var(--foreground))] px-4 py-2 text-sm font-black text-[rgb(var(--background))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent))]"
                      >
                        下载
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
