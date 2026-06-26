"use client";

import { useState } from "react";

const osSections = [
  {
    title: "身份",
    english: "Identity",
    items: ["个人角色", "长期叙事", "公开标签", "边界说明"]
  },
  {
    title: "偏好",
    english: "Preference",
    items: ["视觉偏好", "内容偏好", "工具偏好", "协作偏好"]
  },
  {
    title: "决策",
    english: "Decision",
    items: ["判断原则", "取舍标准", "项目优先级", "复盘记录"]
  },
  {
    title: "思考",
    english: "Thinking",
    items: ["问题库", "观察笔记", "概念草稿", "灵感碎片"]
  },
  {
    title: "版本",
    english: "Version",
    items: ["网站版本", "个人系统版本", "栏目迭代", "未来计划"]
  }
];

export function OSWorkspace() {
  const [active, setActive] = useState(osSections[0]);

  return (
    <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
      <aside className="quiet-card rounded-lg p-3 lg:sticky lg:top-24 lg:self-start">
        <nav className="grid gap-2">
          {osSections.map((section) => (
            <button
              key={section.title}
              type="button"
              onClick={() => setActive(section)}
              className={`rounded-md px-4 py-3 text-left transition ${
                active.title === section.title
                  ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                  : "text-[rgb(var(--muted))] hover:bg-[rgba(var(--foreground),0.06)] hover:text-[rgb(var(--foreground))]"
              }`}
            >
              <span className="block text-base font-black">{section.title}</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.16em] opacity-70">
                {section.english}
              </span>
            </button>
          ))}
        </nav>
      </aside>

      <section className="quiet-card min-h-[520px] rounded-lg p-6">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[rgb(var(--accent))]">
          {active.english}
        </p>
        <h2 className="mt-3 text-4xl font-black text-[rgb(var(--foreground))]">{active.title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[rgb(var(--muted))]">
          这里先建立 Magnii OS 的栏目容器，后续再逐栏填充具体内容、规则、记录和版本说明。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {active.items.map((item) => (
            <article
              key={item}
              className="rounded-lg border border-[rgba(var(--line),0.82)] bg-[rgba(var(--surface-strong),0.45)] p-5"
            >
              <h3 className="text-xl font-black text-[rgb(var(--foreground))]">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-[rgb(var(--muted))]">
                内容占位，等待后续逐页完善。
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
