import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Boxes, Plus } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "项目中心 | Magnii",
  description: "Magnii个人品牌官网项目中心：虎虎豹豹 AI 宠物 IP、Mg 调查档案、知乎写作计划。"
};

export default function ProjectsPage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <SectionHeader
          eyebrow="Projects"
          title="项目中心"
          description="这里会持续沉淀个人品牌、宠物 IP、调查档案和未来 AI 产品孵化相关项目。"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="card-link quiet-card flex min-h-[330px] flex-col justify-between rounded-lg p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[rgba(var(--accent),0.12)] text-[rgb(var(--accent))]">
                    <Boxes className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-sm font-black text-[rgb(var(--muted))]">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-8 text-2xl font-black leading-snug text-[rgb(var(--foreground))]">
                  {project.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-[rgb(var(--muted))]">
                  {project.description}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[rgb(var(--foreground))]">
                查看详情
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}

          <article className="quiet-card flex min-h-[330px] flex-col justify-between rounded-lg border-dashed p-6">
            <div>
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-[rgba(var(--foreground),0.06)] text-[rgb(var(--muted))]">
                <Plus className="h-5 w-5" />
              </span>
              <h2 className="mt-8 text-2xl font-black leading-snug text-[rgb(var(--foreground))]">
                新项目预留
              </h2>
              <p className="mt-5 text-base leading-8 text-[rgb(var(--muted))]">
                后续 AI 产品、内容工具和个人成长项目可以继续接入项目中心。
              </p>
            </div>
            <p className="text-sm font-black text-[rgb(var(--muted))]">Ready for expansion</p>
          </article>
        </div>
      </section>
    </main>
  );
}
