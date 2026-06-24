import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { mgArticles } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Mg调查档案 | Magnii",
  description: "Mg调查档案栏目，用调查档案形式研究商业、消费、游戏和社会现象。"
};

export default function MgPage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <SectionHeader
          eyebrow="Mg Archive"
          title="Mg调查档案"
          description="用故事化方式拆解商业、消费、游戏和社会现象，形成有悬念、有证据、有观点的内容档案。"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {mgArticles.map((article) => (
            <article key={article.slug} className="quiet-card overflow-hidden rounded-lg">
              <Link
                href={`/mg/${article.slug}`}
                className="relative block aspect-[16/9] bg-[rgb(var(--surface-strong))]"
              >
                <Image
                  src={article.cover}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-sm font-black text-[rgb(var(--accent))]">
                    {article.id}
                  </p>
                  <time className="text-sm font-bold text-[rgb(var(--muted))]">
                    {article.date}
                  </time>
                </div>
                <h2 className="mt-4 text-2xl font-black leading-snug text-[rgb(var(--foreground))]">
                  {article.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[rgba(var(--foreground),0.06)] px-3 py-1 text-xs font-bold text-[rgb(var(--muted))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-base leading-8 text-[rgb(var(--muted))]">
                  {article.summary}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/mg/${article.slug}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[rgb(var(--foreground))] px-4 py-2 text-sm font-black text-[rgb(var(--background))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent))]"
                  >
                    阅读全文
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={article.pdf}
                    download
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[rgba(var(--line),0.9)] px-4 py-2 text-sm font-black text-[rgb(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent),0.45)]"
                  >
                    下载PDF
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
