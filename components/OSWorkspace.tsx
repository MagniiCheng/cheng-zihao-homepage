"use client";

import { useState } from "react";

type OSSection = {
  title: string;
  english: string;
  body: React.ReactNode;
};

const tagGroups = {
  likes: ["AI", "5XL", "旅行", "动画", "韩剧", "Cosplay", "美食", "豹豹", "虎虎"],
  dislikes: ["杂乱", "没有逻辑", "花里胡哨", "不好看的设计"],
  decisions: [
    {
      context: "发布之前",
      question: ["如果没有任何流量。", "我还愿意发布它吗？"]
    },
    {
      context: "开始之前",
      question: ["五年以后。", "它还有价值吗？"]
    },
    {
      context: "买之前",
      question: ["它能够陪我多久？"]
    },
    {
      context: "学之前",
      question: ["它真的能提升我的能力吗？"]
    },
    {
      context: "做之前",
      question: ["它只是现在很火。", "还是未来依然重要？"]
    }
  ],
  thinking: [
    ["复杂的问题。", "一定存在更简单的解释。"],
    ["真正有价值的作品。", "会随着时间越来越值钱。"],
    ["作品。", "比观点更重要。"],
    ["很多事情。", "不是没有答案。", "只是没有找到真正的问题。"]
  ]
};

function Tag({ children, tone = "green" }: { children: React.ReactNode; tone?: "green" | "blue" }) {
  const toneClass =
    tone === "green"
      ? "bg-[rgba(21,95,54,0.08)] text-[#155F36]"
      : "bg-[rgba(95,121,151,0.10)] text-[#5F7997]";

  return (
    <span className={`rounded-full px-4 py-2 text-[14px] font-medium ${toneClass}`}>
      {children}
    </span>
  );
}

const osSections: OSSection[] = [
  {
    title: "身份",
    english: "Identity",
    body: (
      <div className="flex min-h-[520px] flex-col justify-between">
        <div className="max-w-[680px] space-y-6 text-[18px] leading-9 text-[#151515]">
          <p>Magnii 是我在互联网世界使用的名字。</p>
          <p>它不是公司，不是品牌，也不是一个已经完成定义的人设。</p>
          <p>它只是一个开始。</p>
        </div>

        <blockquote className="mt-16 max-w-[720px] border-l-4 border-[#155F36] pl-6 text-[22px] leading-10 text-[#151515]">
          <p>Magnii 会有属于自己的意义；</p>
          <p className="mt-2">但今天，它只需要代表真实的我。</p>
        </blockquote>
      </div>
    )
  },
  {
    title: "偏好",
    english: "Preference",
    body: (
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <section>
          <h3 className="text-[18px] font-semibold text-[#151515]">喜欢</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {tagGroups.likes.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-[18px] font-semibold text-[#151515]">不喜欢</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {tagGroups.dislikes.map((item) => (
              <Tag key={item} tone="blue">
                {item}
              </Tag>
            ))}
          </div>
        </section>
      </div>
    )
  },
  {
    title: "决策",
    english: "Decision",
    body: (
      <div className="max-w-[760px]">
        <p className="text-[15px] font-medium uppercase tracking-[0.18em] text-[#8A8C88]">
          Decision Framework
        </p>
        <div className="mt-12 space-y-12">
          {tagGroups.decisions.map((item) => (
            <section key={item.context}>
              <h3 className="text-[15px] font-medium text-[#155F36]">{item.context}</h3>
              <div className="mt-4 space-y-2 text-[24px] leading-10 tracking-[-0.01em] text-[#151515]">
                {item.question.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "思考",
    english: "Thinking",
    body: (
      <div className="max-w-[780px]">
        <p className="text-[15px] font-medium uppercase tracking-[0.18em] text-[#8A8C88]">
          Thinking Principles
        </p>
        <div className="mt-12 space-y-14">
          {tagGroups.thinking.map((principle) => (
            <section
              key={principle.join("")}
              className="space-y-2 text-[26px] leading-[44px] tracking-[-0.01em] text-[#151515]"
            >
              {principle.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    )
  },
  {
    title: "版本",
    english: "Version",
    body: (
      <div className="max-w-[680px]">
        <p className="text-[30px] font-semibold tracking-[-0.02em] text-[#151515]">Version 0.1</p>
        <p className="mt-4 text-[18px] text-[#6D706D]">2026</p>
        <p className="mt-10 text-[22px] leading-10 text-[#151515]">
          Magnii OS 正在持续成长。
        </p>
      </div>
    )
  }
];

export function OSWorkspace() {
  const [activeTitle, setActiveTitle] = useState(osSections[0].title);
  const active = osSections.find((section) => section.title === activeTitle) ?? osSections[0];

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-12 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[24px] bg-[#111111] p-4 text-white lg:sticky lg:top-24 lg:h-[calc(100svh-144px)] lg:min-h-[620px]">
          <div className="px-4 py-5">
            <p className="text-[15px] font-medium text-white">Magnii OS</p>
            <p className="mt-2 text-[12px] font-normal uppercase tracking-[0.18em] text-white/45">
              Workspace
            </p>
          </div>

          <nav className="mt-8 grid gap-2">
            {osSections.map((section) => {
              const isActive = active.title === section.title;

              return (
                <button
                  key={section.title}
                  type="button"
                  onClick={() => setActiveTitle(section.title)}
                  className={`relative min-h-12 rounded-[14px] px-5 py-3 text-left text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white/[0.08] ${
                    isActive ? "bg-white/[0.12]" : ""
                  }`}
                >
                  {isActive ? (
                    <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-[#155F36]" />
                  ) : null}
                  {section.title}
                </button>
              );
            })}
          </nav>
        </aside>

        <section className="min-h-[620px] rounded-[32px] border border-[#E5E5E5] bg-white p-7 shadow-[0_16px_48px_rgba(0,0,0,0.05)] sm:p-10 lg:p-12">
          <div
            key={active.title}
            className="translate-y-0 opacity-100 transition duration-200 ease-out motion-safe:animate-[osFade_200ms_ease-out]"
          >
            <header>
              <h1 className="text-[40px] font-bold leading-tight tracking-[-0.02em] text-[#151515]">
                {active.title}
              </h1>
              <p className="mt-2 text-[13px] font-normal tracking-[0.08em] text-[#8A8C88]">
                {active.english}
              </p>
            </header>

            <div className="mt-12">{active.body}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
