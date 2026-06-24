import type { Metadata } from "next";
import { Bot, Radar, WandSparkles } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "AI实验室 | Magnii",
  description: "Magnii未来 AI 产品孵化入口，预留知乎选题雷达、调查档案生成器和 AI 工具集合。"
};

const aiItems = [
  { title: "知乎选题雷达", icon: Radar },
  { title: "调查档案生成器", icon: WandSparkles },
  { title: "AI工具集合", icon: Bot }
];

export default function AiPage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <SectionHeader
          eyebrow="AI Lab"
          title="未来 AI 产品入口"
          description="这里预留给后续上线的个人 AI 产品与内容生产工具。"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {aiItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="quiet-card rounded-lg p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[rgba(var(--accent),0.12)] text-[rgb(var(--accent))]">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-6 text-2xl font-black text-[rgb(var(--foreground))]">
                  {item.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[rgb(var(--muted))]">
                  正在规划中，后续可以作为独立工具或嵌入式产品模块接入。
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
