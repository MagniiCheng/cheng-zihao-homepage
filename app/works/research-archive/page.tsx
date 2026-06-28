import type { Metadata } from "next";
import { ResearchArchiveBrowser } from "@/components/ResearchArchiveBrowser";
import { getResearchArchives, getResearchArchiveTags } from "@/lib/research-archive";

export const metadata: Metadata = {
  title: "调查档案 | Magnii",
  description: "Magnii Research Archive，保存所有长期调查档案。"
};

export default function ResearchArchivePage() {
  const entries = getResearchArchives();
  const tags = getResearchArchiveTags(entries);
  const latestUpdate = entries[0]?.dateLabel ?? "待更新";

  return (
    <main className="min-h-screen bg-[#F6F5F2] px-5 pb-20 pt-24 text-[#151515] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-6">
        <section className="flex min-h-[320px] flex-col justify-end rounded-[36px] border border-[#E4E5E2] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-12 lg:p-14">
          <h1 className="text-[clamp(56px,9vw,112px)] font-[760] leading-[0.9] tracking-[-0.08em] text-[#151515]">
            调查档案
          </h1>
          <p className="mt-5 text-2xl leading-tight text-[#6D706D]">Research Archive</p>
          <p className="mt-8 text-balance text-[clamp(28px,4vw,44px)] font-semibold leading-[1.2] tracking-[-0.04em] text-[#151515]">
            研究那些值得长期思考的问题。
          </p>
          <p className="mt-4 max-w-[560px] text-base leading-[1.8] text-[#6D706D]">
            这里保存 Magnii 所有调查档案。
          </p>
        </section>

        <section className="grid gap-3 rounded-[36px] border border-[#E4E5E2] bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:grid-cols-3 sm:p-10">
          {[
            { label: "调查数量", value: String(entries.length).padStart(3, "0") },
            { label: "累计阅读时间", value: "Coming Soon" },
            { label: "最新更新", value: latestUpdate }
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-b border-[#E4E5E2] py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <p className="text-sm text-[#8A8C88]">{stat.label}</p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#151515]">
                {stat.value}
              </p>
            </div>
          ))}
        </section>

        <ResearchArchiveBrowser entries={entries} tags={tags} />
      </div>
    </main>
  );
}
