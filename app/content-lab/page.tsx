import type { Metadata } from "next";
import Link from "next/link";
import { getResearchArchives } from "@/lib/research-archive";
import {
  formatXhsDateTime,
  formatXhsNumber,
  formatXhsPercent,
  rate,
  type XhsContentRecord,
  xhsContentRecords
} from "@/lib/xhs-content-lab";

export const metadata: Metadata = {
  title: "小红书 Content Lab | Magnii",
  description: "Magnii OS 的小红书内容数据记录系统，先记录真实发生了什么。"
};

type LabField = {
  label: string;
  getValue: (record: XhsContentRecord) => string;
};

type LabCardProps = {
  title: string;
  english: string;
  description: string;
  fields: LabField[];
};

const labCards: LabCardProps[] = [
  {
    title: "Click Lab",
    english: "Click Data",
    description: "记录点击与进入内容前发生的事情。",
    fields: [
      { label: "Cover", getValue: () => "P1" },
      { label: "Views", getValue: (record) => formatXhsNumber(record.views) },
      { label: "CTR", getValue: (record) => formatXhsPercent(record.coverCtr) },
      { label: "Publish Time", getValue: (record) => formatXhsDateTime(record.publishTime) }
    ]
  },
  {
    title: "Like Lab",
    english: "Like Data",
    description: "记录点赞，不解释点赞。",
    fields: [
      { label: "Likes", getValue: (record) => formatXhsNumber(record.likes) },
      { label: "Like Rate", getValue: (record) => formatXhsPercent(rate(record.likes, record.views)) }
    ]
  },
  {
    title: "Save Lab",
    english: "Save Data",
    description: "记录收藏，等待长期样本出现。",
    fields: [
      { label: "Saves", getValue: (record) => formatXhsNumber(record.saves) },
      { label: "Save Rate", getValue: (record) => formatXhsPercent(rate(record.saves, record.views)) }
    ]
  },
  {
    title: "Comment Lab",
    english: "Comment Data",
    description: "记录评论，暂不分析评论内容。",
    fields: [
      { label: "Comments", getValue: (record) => formatXhsNumber(record.comments) },
      {
        label: "Comment Rate",
        getValue: (record) => formatXhsPercent(rate(record.comments, record.views))
      }
    ]
  },
  {
    title: "Share Lab",
    english: "Share Data",
    description: "记录分享，不提前判断传播原因。",
    fields: [
      { label: "Shares", getValue: (record) => formatXhsNumber(record.shares) },
      { label: "Share Rate", getValue: (record) => formatXhsPercent(rate(record.shares, record.views)) }
    ]
  },
  {
    title: "Follow Lab",
    english: "Follow Data",
    description: "记录涨粉，不把涨粉当成唯一目标。",
    fields: [
      { label: "Followers", getValue: (record) => formatXhsNumber(record.followers) },
      {
        label: "Conversion",
        getValue: (record) => formatXhsPercent(rate(record.followers, record.views))
      }
    ]
  }
];

function Hero() {
  return (
    <section className="flex min-h-[340px] flex-col justify-end rounded-[36px] border border-[#E4E5E2] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-12 lg:p-14">
      <p className="text-sm font-medium tracking-[0.08em] text-[#8A8C88]">
        小红书 Content Lab
      </p>
      <h1 className="mt-6 text-balance text-[clamp(48px,8vw,104px)] font-[760] leading-[0.9] tracking-[-0.08em] text-[#151515]">
        XHS Content Lab
      </h1>
      <p className="mt-8 text-balance text-[clamp(28px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.04em] text-[#151515]">
        记录每一篇内容的数据。
      </p>
      <p className="mt-4 max-w-[560px] text-base leading-[1.8] text-[#6D706D]">
        等待规律自己出现。
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <span className="rounded-full bg-[rgba(21,95,54,0.08)] px-4 py-2 text-sm font-medium text-[#155F36]">
          Version 1
        </span>
        <span className="rounded-full border border-[#E4E5E2] px-4 py-2 text-sm font-medium text-[#6D706D]">
          Record First.
        </span>
      </div>
    </section>
  );
}

function ContentLabCard() {
  const entries = getResearchArchives();
  const entryMap = new Map(entries.map((entry) => [entry.id, entry]));

  return (
    <section className="rounded-[36px] border border-[#E4E5E2] bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition-all duration-[250ms] hover:-translate-y-1 hover:border-[rgba(21,95,54,0.28)] sm:p-10 lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-sm font-medium text-[#8A8C88]">System Home</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#151515]">
            Content Lab
          </h2>
          <p className="mt-5 max-w-sm text-base leading-[1.8] text-[#6D706D]">
            查看所有已经进入记录系统的小红书内容。
          </p>
        </div>

        <div className="divide-y divide-[#E4E5E2]">
          {xhsContentRecords.length ? (
            xhsContentRecords.map((record) => {
              const entry = entryMap.get(record.researchId);

              return (
                <Link
                  key={record.id}
                  href={entry?.detailHref ?? `/works/research-archive/${record.researchId}`}
                  className="group grid gap-4 py-6 transition-colors md:grid-cols-[120px_1fr_160px] md:items-center"
                >
                  <p className="text-sm font-medium text-[#8A8C88]">
                    Research #{record.researchId}
                  </p>
                  <p className="text-balance text-2xl font-semibold leading-[1.22] tracking-[-0.04em] text-[#151515] transition-colors group-hover:text-[#155F36]">
                    {record.title}
                  </p>
                  <p className="text-sm text-[#8A8C88]">
                    Publish
                    <br />
                    {formatXhsDateTime(record.publishTime)}
                  </p>
                </Link>
              );
            })
          ) : (
            <div className="py-6 text-base text-[#6D706D]">暂无内容记录。</div>
          )}
        </div>
      </div>
    </section>
  );
}

function LabCard({ title, english, description, fields }: LabCardProps) {
  return (
    <article className="rounded-[36px] border border-[#E4E5E2] bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.06)] transition-all duration-[250ms] hover:-translate-y-1 hover:border-[rgba(21,95,54,0.28)] sm:p-8">
      <div>
        <p className="text-sm font-medium text-[#8A8C88]">{english}</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#151515]">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-[1.8] text-[#6D706D]">{description}</p>
      </div>

      <div className="mt-8 divide-y divide-[#E4E5E2]">
        {xhsContentRecords.map((record) => (
          <div key={record.id} className="py-5">
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-medium text-[#8A8C88]">#{record.researchId}</p>
              <p className="text-right text-sm font-medium leading-6 text-[#151515]">
                {record.title}
              </p>
            </div>
            <div className="mt-4 grid gap-3">
              {fields.map((field) => (
                <div
                  key={`${record.id}-${field.label}`}
                  className="flex items-center justify-between gap-4 rounded-md bg-[#F6F5F2] px-3 py-2"
                >
                  <span className="text-xs text-[#8A8C88]">{field.label}</span>
                  <span className="text-right text-sm font-medium text-[#151515]">
                    {field.getValue(record)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ContentLabPage() {
  return (
    <main className="min-h-screen bg-[#F6F5F2] px-5 pb-20 pt-24 text-[#151515] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-6">
        <Hero />
        <ContentLabCard />
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {labCards.map((lab) => (
            <LabCard key={lab.title} {...lab} />
          ))}
        </section>
      </div>
    </main>
  );
}
