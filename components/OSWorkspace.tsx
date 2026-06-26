"use client";

import { useState } from "react";

type OSSection = {
  title: string;
  english: string;
  body: React.ReactNode;
};

type OSWorkspaceProps = {
  initialSectionTitle?: string;
};

const typography = {
  pageTitle:
    "text-[40px] font-bold leading-[1.1] tracking-[-0.04em] text-[#151515] sm:text-[48px]",
  pageSubtitle: "text-[16px] font-normal leading-[1.4] tracking-[0.02em] text-[#8A8C88]",
  largeText: "text-[28px] font-medium leading-[1.7] text-[#151515]",
  bodyText: "text-[18px] font-normal leading-[1.8] text-[#333533]",
  assistive: "text-[14px] leading-[1.6] text-[#6D706D]",
  sectionTitle: "text-[24px] font-bold text-[#151515]",
  listPrimary: "text-[20px] font-medium text-[#151515]",
  listAssistive: "text-[13px] text-[#8A8C88]"
};

const preferenceItems = {
  likes: [
    ["AI", "Artificial Intelligence"],
    ["旅行", "Travel"],
    ["动画", "Anime"],
    ["韩剧", "K-Drama"],
    ["Cosplay", "Cosplay"],
    ["美食", "Food"],
    ["5XL", "Private Symbol"],
    ["豹豹", "Baobao"],
    ["虎虎", "Huhu"]
  ],
  dislikes: [
    ["杂乱", "Messy"],
    ["没有逻辑", "Illogical"],
    ["花里胡哨", "Noisy"],
    ["不好看的设计", "Bad Design"]
  ]
};

const decisionItems = [
  {
    context: "发布之前",
    question: "如果没有任何流量，我还愿意发布它吗？"
  },
  {
    context: "开始之前",
    question: "五年以后，它还有价值吗？"
  },
  {
    context: "买之前",
    question: "它能够陪我多久？"
  },
  {
    context: "学之前",
    question: "它真的能提升我的能力吗？"
  },
  {
    context: "做之前",
    question: "它只是现在很火，还是未来依然重要？"
  }
];

const thinkingItems = [
  "复杂的问题，一定存在更简单的解释。",
  "真正有价值的作品，会随着时间越来越值钱。",
  "作品，比观点更重要。",
  "很多事情，不是没有答案，只是没有找到真正的问题。"
];

const principleItems = [
  {
    number: "01",
    title: "先组织，再设计",
    english: "Organize before Design",
    paragraphs: [
      "我很少直接开始做东西。",
      "无论是网站、调查档案还是视频，我都会先花大量时间整理结构。",
      "因为我相信：混乱的问题，靠设计解决不了。",
      "只能靠组织解决。"
    ],
    evidence: ["Magnii OS", "Research Lab", "Website Structure"]
  },
  {
    number: "02",
    title: "一个页面，一个主题",
    english: "One Page, One Subject",
    paragraphs: [
      "页面不是用来堆信息的。",
      "一个页面如果同时承担太多任务，用户会失去判断，也会失去耐心。",
      "我更愿意让每个页面只回答一个问题。",
      "剩下的内容，应该去它自己的位置。"
    ],
    evidence: ["Works", "OS Navigation", "Information Architecture"]
  },
  {
    number: "03",
    title: "克制比丰富更重要",
    english: "Restraint over Abundance",
    paragraphs: [
      "丰富很容易。",
      "真正难的是知道什么可以不出现。",
      "我不希望一个作品靠热闹证明自己。",
      "如果它足够清楚，就不需要太多装饰。"
    ],
    evidence: ["Design System", "Magnii OS", "Interface Rules"]
  },
  {
    number: "04",
    title: "内容优先于视觉",
    english: "Content before Visuals",
    paragraphs: [
      "视觉可以让内容被看见。",
      "但视觉不能替内容完成表达。",
      "如果内容本身没有结构、没有判断、没有真实的问题，设计只会把空洞放大。",
      "所以我会先确认内容是否站得住。"
    ],
    evidence: ["Research Archive", "Writing", "Website"]
  },
  {
    number: "05",
    title: "真实胜过包装",
    english: "Truth over Packaging",
    paragraphs: [
      "我不想把自己包装成一个已经完成的人。",
      "很多重要的东西，都是在记录、试错和反复修改里慢慢出现的。",
      "比起看起来正确，我更在意它是否真实。",
      "真实的东西，才有继续生长的可能。"
    ],
    evidence: ["About", "Life", "Magnii OS"]
  },
  {
    number: "06",
    title: "长期主义",
    english: "Long-termism",
    paragraphs: [
      "我希望作品不是只在发布那一天有意义。",
      "一个真正值得做的东西，应该能被反复阅读、反复使用、反复回到现场。",
      "时间不是作品的敌人。",
      "时间应该是作品的一部分。"
    ],
    evidence: ["Works", "Library", "Operating Manual"]
  }
];

function PreferenceColumn({
  title,
  items
}: {
  title: string;
  items: string[][];
}) {
  return (
    <section>
      <h2 className={typography.sectionTitle}>{title}</h2>
      <div className="mt-7">
        {items.map(([label, english]) => (
          <div
            key={`${title}-${label}`}
            className="flex min-h-14 items-center justify-between gap-6 border-b border-[#E4E5E2]"
          >
            <span className={typography.listPrimary}>{label}</span>
            <span className={`${typography.listAssistive} text-right`}>{english}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function DecisionBlock({ context, question }: { context: string; question: string }) {
  return (
    <section className="border-b border-[#E4E5E2] py-7">
      <h2 className="text-[18px] font-normal leading-[1.6] text-[#6D706D]">{context}</h2>
      <p className="mt-3 text-[28px] font-medium leading-[1.6] text-[#151515]">{question}</p>
    </section>
  );
}

function ThinkingBlock({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-b border-[#E4E5E2] py-7">
      <p className={typography.largeText}>{children}</p>
    </section>
  );
}

function OperatingPrinciples() {
  return (
    <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-[16px] font-medium leading-[1.4] tracking-[0.02em] text-[#151515]">
          Operating Principles
        </p>
        <nav className="mt-8 grid gap-5 border-y border-[#E4E5E2] py-8">
          {principleItems.map((item) => (
            <a
              key={item.number}
              href={`#principle-${item.number}`}
              className="group grid grid-cols-[40px_1fr] gap-4 text-left"
            >
              <span className="text-[13px] font-medium text-[#8A8C88]">{item.number}</span>
              <span className="text-[15px] font-medium text-[#333533] transition-colors group-hover:text-[#155F36]">
                {item.title}
              </span>
            </a>
          ))}
        </nav>
      </aside>

      <div>
        {principleItems.map((item) => (
          <section
            key={item.number}
            id={`principle-${item.number}`}
            className="scroll-mt-28 border-b border-[#E4E5E2] py-24 first:pt-0"
          >
            <p className="text-[64px] font-bold leading-none tracking-[-0.05em] text-[#E4E5E2]">
              {item.number}
            </p>
            <h2 className="mt-8 text-[40px] font-bold leading-[1.15] tracking-[-0.04em] text-[#151515]">
              {item.title}
            </h2>
            <p className="mt-3 text-[16px] font-normal leading-[1.4] tracking-[0.02em] text-[#8A8C88]">
              {item.english}
            </p>

            <div className="mt-12 max-w-[760px] space-y-7 text-[20px] font-normal leading-[2] text-[#333333]">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-14">
              <p className="text-[14px] font-medium leading-[1.6] text-[#155F36]">Evidence</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {item.evidence.map((evidence) => (
                  <span
                    key={evidence}
                    className="rounded-full bg-[rgba(21,95,54,0.08)] px-4 py-2 text-[14px] font-medium leading-[1.6] text-[#155F36]"
                  >
                    {evidence}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}

        <footer className="grid gap-8 py-24 sm:grid-cols-2">
          <div>
            <p className="text-[14px] leading-[1.6] text-[#6D706D]">Last Updated</p>
            <p className="mt-3 text-[20px] font-medium leading-[2] text-[#333333]">2026.06.26</p>
          </div>
          <div>
            <p className="text-[14px] leading-[1.6] text-[#6D706D]">Version</p>
            <p className="mt-3 text-[20px] font-medium leading-[2] text-[#333333]">1.0</p>
          </div>
          <p className="max-w-[760px] text-[18px] font-normal leading-[1.8] text-[#333533] sm:col-span-2">
            Operating Principles 并不是固定不变。它会随着 Magnii 的成长不断迭代。
          </p>
        </footer>
      </div>
    </div>
  );
}

const osSections: OSSection[] = [
  {
    title: "身份",
    english: "Identity",
    body: (
      <div className="flex min-h-[480px] flex-col justify-between">
        <div className={`max-w-[760px] space-y-6 ${typography.bodyText}`}>
          <p>Magnii 是我在互联网世界使用的名字。</p>
          <p>它不是公司，不是品牌，也不是一个已经完成定义的人设。</p>
          <p>它只是一个开始。</p>
        </div>

        <blockquote className={`mt-16 max-w-[820px] border-l-4 border-[#155F36] pl-6 ${typography.largeText}`}>
          <p>Magnii 会有属于自己的意义；</p>
          <p className="mt-2">但今天，它只需要代表真实的我。</p>
        </blockquote>
      </div>
    )
  },
  {
    title: "原则",
    english: "Operating Principles",
    body: <OperatingPrinciples />
  },
  {
    title: "偏好",
    english: "Preference",
    body: (
      <div className="grid gap-12 md:grid-cols-2 md:gap-12 lg:gap-12">
        <PreferenceColumn title="喜欢" items={preferenceItems.likes} />
        <PreferenceColumn title="不喜欢" items={preferenceItems.dislikes} />
      </div>
    )
  },
  {
    title: "决策",
    english: "Decision",
    body: (
      <div>
        {decisionItems.map((item) => (
          <DecisionBlock key={item.context} context={item.context} question={item.question} />
        ))}
      </div>
    )
  },
  {
    title: "思考",
    english: "Thinking",
    body: (
      <div>
        {thinkingItems.map((item) => (
          <ThinkingBlock key={item}>{item}</ThinkingBlock>
        ))}
      </div>
    )
  },
  {
    title: "版本",
    english: "Version",
    body: (
      <div className="max-w-[760px]">
        <p className={typography.largeText}>Version 0.1</p>
        <p className={`mt-3 ${typography.assistive}`}>2026</p>
        <p className={`mt-10 ${typography.bodyText}`}>Magnii OS 正在持续成长。</p>
      </div>
    )
  }
];

export function OSWorkspace({ initialSectionTitle = osSections[0].title }: OSWorkspaceProps) {
  const [activeTitle, setActiveTitle] = useState(initialSectionTitle);
  const active = osSections.find((section) => section.title === activeTitle) ?? osSections[0];

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-12 sm:py-12">
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="rounded-[24px] bg-[#111111] p-4 text-white lg:sticky lg:top-24 lg:h-[calc(100svh-144px)] lg:min-h-[680px]">
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

        <section className="min-h-[680px] rounded-[32px] border border-[#E4E5E2] bg-white p-8 shadow-[0_16px_48px_rgba(0,0,0,0.05)] sm:p-12 lg:p-16">
          <div
            key={active.title}
            className="translate-y-0 opacity-100 transition duration-200 ease-out motion-safe:animate-[osFade_200ms_ease-out]"
          >
            <header>
              <h1 className={typography.pageTitle}>{active.title}</h1>
              <p className={`mt-3 ${typography.pageSubtitle}`}>{active.english}</p>
            </header>

            <div className="mt-14">{active.body}</div>
          </div>
        </section>
      </div>
    </div>
  );
}
