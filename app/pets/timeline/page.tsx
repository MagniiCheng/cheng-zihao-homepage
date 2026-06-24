import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { petTimeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "成长记录 | 虎虎豹豹",
  description: "虎虎豹豹成长记录时间轴，记录豹豹到家、虎虎体重变化和后续重要节点。"
};

export default function PetTimelinePage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-5xl py-12">
        <SectionHeader
          eyebrow="Timeline"
          title="成长记录"
          description="时间轴数据已经结构化，后续可以从后台、CMS 或数据库直接维护。"
        />

        <div className="quiet-card rounded-lg p-6">
          <ol className="relative border-l border-[rgba(var(--line),0.9)] pl-6">
            {petTimeline.map((item) => (
              <li key={`${item.date}-${item.title}`} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[rgb(var(--accent))] ring-4 ring-[rgb(var(--surface))]" />
                <time className="font-mono text-sm font-black text-[rgb(var(--accent))]">
                  {item.date}
                </time>
                <h2 className="mt-2 text-2xl font-black text-[rgb(var(--foreground))]">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm font-bold text-[rgb(var(--muted))]">{item.pet}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
