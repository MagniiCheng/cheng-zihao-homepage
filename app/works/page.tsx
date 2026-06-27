import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getResearchArchives } from "@/lib/research-archive";

export const metadata: Metadata = {
  title: "作品 | Magnii",
  description: "Magnii 的作品展厅，展示 Mg 调查档案、Paw Lab 与 Journal。"
};

type RecentActivity = {
  date: string;
  label: string;
  title: string;
  href: string;
};

type ExhibitItem = {
  label: string;
  title: string;
  href?: string;
};

const archives = getResearchArchives();
const latestArticle = archives[0];
const recentArticles = archives.slice(1, 3);

const recentActivities: RecentActivity[] = [
  {
    date: "2026.06",
    label: `调查档案 ${latestArticle.displayId}`,
    title: latestArticle.title,
    href: latestArticle.detailHref
  },
  {
    date: "2026.06",
    label: "Magnii OS",
    title: "Operating Principles",
    href: "/os/principles"
  },
  {
    date: "2026.06",
    label: "虎虎舔爪子",
    title: "AI Video",
    href: "/works/tiger-baobao"
  }
];

const pawLabItems: ExhibitItem[] = [
  { label: "最新视频", title: "虎虎舔爪子", href: "/works/tiger-baobao" },
  { label: "最新建模", title: "豹豹睡觉", href: "/works/tiger-baobao" },
  { label: "最新剧本", title: "虎虎豹豹巡逻日", href: "/works/tiger-baobao" }
];

const journalItems: ExhibitItem[] = [
  { label: "无锡", title: "2026", href: "/life" },
  { label: "重庆", title: "2026", href: "/life" },
  { label: "Cosplay", title: "2026", href: "/life" }
];

function SectionHeading({
  title,
  english,
  light = false
}: {
  title: string;
  english: string;
  light?: boolean;
}) {
  return (
    <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <h2 className={`text-3xl font-semibold tracking-[-0.04em] ${light ? "text-white" : "text-[#151515]"}`}>
        {title}
      </h2>
      <p className={`text-sm ${light ? "text-white/[0.50]" : "text-[#8A8C88]"}`}>{english}</p>
    </header>
  );
}

function ArrowLink({
  href,
  children,
  light = false
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
        light
          ? "bg-white text-[#151515] hover:bg-[#155F36] hover:text-white"
          : "bg-[#155F36] text-white hover:bg-[#0F4E2C]"
      }`}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

function RecentActivity() {
  return (
    <section className="rounded-[36px] border border-[#E4E5E2] bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-10 lg:p-12">
      <SectionHeading title="最近动态" english="Recent Activity" />
      <div className="mt-8 divide-y divide-[#E4E5E2]">
        {recentActivities.map((work) => (
          <Link
            key={`${work.label}-${work.title}`}
            href={work.href}
            className="group grid gap-4 py-7 transition-colors hover:text-[#155F36] md:grid-cols-[120px_220px_1fr] md:items-start"
          >
            <p className="text-sm font-medium text-[#8A8C88]">{work.date}</p>
            <p className="text-sm font-medium text-[#6D706D]">{work.label}</p>
            <p className="text-balance text-3xl font-semibold leading-[1.16] tracking-[-0.04em] text-[#151515] transition-colors group-hover:text-[#155F36]">
              {work.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ResearchArchiveExhibit() {
  return (
    <section className="rounded-[36px] border border-[#111111] p-7 text-white shadow-[0_18px_60px_rgba(0,0,0,0.10)] sm:p-10 lg:p-12" style={{ background: "linear-gradient(180deg, #111111, #090909)" }}>
      <SectionHeading title="Mg 调查档案" english="Research Archive" light />

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <Link href={latestArticle.detailHref} className="group block">
          <p className="text-sm font-medium text-white/[0.48]">最新调查</p>
          <p className="mt-6 text-2xl font-semibold text-white/[0.78]">{latestArticle.displayId}</p>
          <h3 className="mt-5 max-w-3xl text-balance text-[clamp(42px,7vw,88px)] font-semibold leading-[1.02] tracking-[-0.07em] text-white transition-colors group-hover:text-white/[0.78]">
            {latestArticle.title}
          </h3>
          <p className="mt-8 text-base text-white/[0.50]">{latestArticle.dateLabel}</p>
        </Link>

        <div className="flex flex-col justify-between gap-10">
          <div>
            <p className="text-sm font-medium text-white/[0.48]">最近调查</p>
            <div className="mt-5 divide-y divide-white/[0.14]">
              {recentArticles.map((article) => (
                <Link
                  key={article.id}
                  href={article.detailHref}
                  className="group grid gap-3 py-5"
                >
                  <p className="text-sm text-white/[0.42]">{article.displayId}</p>
                  <p className="text-2xl font-semibold leading-snug tracking-[-0.03em] text-white transition-colors group-hover:text-white/[0.74]">
                    {article.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <ArrowLink href="/works/research-archive" light>
            进入调查档案
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

function ExhibitList({
  title,
  english,
  items,
  href,
  action,
  minHeight = 420
}: {
  title: string;
  english: string;
  items: ExhibitItem[];
  href: string;
  action: string;
  minHeight?: number;
}) {
  return (
    <section
      className="flex flex-col justify-between rounded-[36px] border border-[#E4E5E2] bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition-all duration-[250ms] hover:-translate-y-1 hover:border-[rgba(21,95,54,0.28)] sm:p-10 lg:p-12"
      style={{ minHeight }}
    >
      <div>
        <SectionHeading title={title} english={english} />
        <div className="mt-10 divide-y divide-[#E4E5E2]">
          {items.map((item) => {
            const content = (
              <>
                <p className="text-sm font-medium text-[#8A8C88]">{item.label}</p>
                <p className="mt-3 text-balance text-3xl font-semibold leading-[1.18] tracking-[-0.04em] text-[#151515] transition-colors group-hover:text-[#155F36]">
                  {item.title}
                </p>
              </>
            );

            if (item.href) {
              return (
                <Link key={`${item.label}-${item.title}`} href={item.href} className="group block py-7">
                  {content}
                </Link>
              );
            }

            return (
              <div key={`${item.label}-${item.title}`} className="py-7">
                {content}
              </div>
            );
          })}
        </div>
      </div>

      <ArrowLink href={href}>{action}</ArrowLink>
    </section>
  );
}

export default function WorksPage() {
  return (
    <main className="min-h-screen bg-[#F6F5F2] px-5 pb-20 pt-24 text-[#151515] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-6">
        <section className="flex min-h-[320px] flex-col justify-end rounded-[36px] border border-[#E4E5E2] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:min-h-[340px] sm:p-12 lg:p-14">
          <h1 className="text-[clamp(60px,9vw,116px)] font-[760] leading-[0.9] tracking-[-0.08em] text-[#151515]">
            作品
          </h1>
          <p className="mt-5 text-2xl leading-tight text-[#6D706D]">Works</p>
          <p className="mt-8 text-balance text-[clamp(28px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.04em] text-[#151515]">
            作品，比观点更重要。
          </p>
          <p className="mt-4 max-w-[560px] text-base leading-[1.8] text-[#6D706D]">
            这里保存真正值得长期留下来的作品。
          </p>
        </section>

        <RecentActivity />
        <ResearchArchiveExhibit />

        <ExhibitList
          title="Paw Lab"
          english="虎虎豹豹 AI"
          items={pawLabItems}
          href="/works/tiger-baobao"
          action="进入 Paw Lab"
          minHeight={420}
        />

        <ExhibitList
          title="Journal"
          english="日记手记"
          items={journalItems}
          href="/life"
          action="进入 Journal"
          minHeight={360}
        />
      </div>
    </main>
  );
}
