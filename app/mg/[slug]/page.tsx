import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { mgArticles, siteConfig } from "@/lib/site-data";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mgArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = mgArticles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "档案不存在 | Mg调查档案"
    };
  }

  return {
    title: `${article.title} | Mg调查档案`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `${siteConfig.url}/mg/${article.slug}`,
      images: [article.cover]
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [article.cover]
    }
  };
}

export default async function MgArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const articleIndex = mgArticles.findIndex((item) => item.slug === slug);
  const article = mgArticles[articleIndex];

  if (!article) {
    notFound();
  }

  const previous = articleIndex > 0 ? mgArticles[articleIndex - 1] : null;
  const next = articleIndex < mgArticles.length - 1 ? mgArticles[articleIndex + 1] : null;

  return (
    <main className="page-section pt-28">
      <article className="mx-auto max-w-5xl py-12">
        <Link
          href="/mg"
          className="mb-8 inline-flex items-center gap-2 text-sm font-black text-[rgb(var(--muted))] transition hover:text-[rgb(var(--foreground))]"
        >
          <ArrowLeft className="h-4 w-4" />
          返回 Mg调查档案
        </Link>

        <header>
          <p className="font-mono text-sm font-black text-[rgb(var(--accent))]">{article.id}</p>
          <h1 className="mt-4 text-balance text-4xl font-black leading-tight text-[rgb(var(--foreground))] sm:text-6xl">
            {article.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <time className="text-sm font-bold text-[rgb(var(--muted))]">{article.date}</time>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[rgba(var(--foreground),0.06)] px-3 py-1 text-xs font-bold text-[rgb(var(--muted))]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-lg border border-[rgba(var(--line),0.9)] bg-[rgb(var(--surface-strong))]">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 960px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
          <div className="quiet-card rounded-lg p-6 sm:p-8">
            <div className="grid gap-6 text-lg leading-9 text-[rgb(var(--foreground))]">
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="grid gap-5 self-start">
            <a
              href={article.pdf}
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[rgb(var(--foreground))] px-5 py-3 text-sm font-black text-[rgb(var(--background))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent))]"
            >
              下载PDF
              <Download className="h-4 w-4" />
            </a>

            <section className="quiet-card rounded-lg p-5">
              <h2 className="text-base font-black text-[rgb(var(--foreground))]">引用资料</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[rgb(var(--muted))]">
                {article.references.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="quiet-card rounded-lg p-5">
              <h2 className="text-base font-black text-[rgb(var(--foreground))]">证据截图</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[rgb(var(--muted))]">
                {article.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </aside>
        </div>

        <nav className="mt-10 grid gap-4 sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/mg/${previous.slug}`}
              className="quiet-card card-link rounded-lg p-5 text-[rgb(var(--foreground))]"
            >
              <span className="flex items-center gap-2 text-sm font-black text-[rgb(var(--muted))]">
                <ArrowLeft className="h-4 w-4" />
                上一篇
              </span>
              <p className="mt-3 text-lg font-black">{previous.title}</p>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/mg/${next.slug}`}
              className="quiet-card card-link rounded-lg p-5 text-right text-[rgb(var(--foreground))]"
            >
              <span className="inline-flex items-center gap-2 text-sm font-black text-[rgb(var(--muted))]">
                下一篇
                <ArrowRight className="h-4 w-4" />
              </span>
              <p className="mt-3 text-lg font-black">{next.title}</p>
            </Link>
          ) : null}
        </nav>
      </article>
    </main>
  );
}
