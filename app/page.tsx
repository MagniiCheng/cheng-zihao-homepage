import { ArrowUpRight, Compass, FileText, PawPrint, Sparkles } from "lucide-react";
import { CopyEmailButton } from "@/components/CopyEmailButton";

const identityTags = [
  "产品经理",
  "AI内容创作者",
  "虎虎豹豹AI宠物IP主理人",
  "Mg调查档案作者"
];

const projects = [
  {
    title: "虎虎豹豹 AI 宠物 IP",
    description:
      "以萨摩耶豹豹和缅因猫虎虎为主角，探索 AI 短视频、角色设定和内容 IP 化。",
    icon: PawPrint,
    accent: "text-cyan",
    meta: "角色设定 / AI短视频 / IP化"
  },
  {
    title: "Mg 调查档案",
    description:
      "用故事化方式拆解生活、消费、游戏和社会现象，做有悬念、有证据、有观点的图文内容。",
    icon: Compass,
    accent: "text-copper",
    meta: "故事拆解 / 证据链 / 观点表达"
  },
  {
    title: "知乎写作计划",
    description:
      "围绕职场、人性、亲密关系和成长问题，输出通俗但有洞察的长文回答。",
    icon: FileText,
    accent: "text-wine",
    meta: "长文回答 / 成长议题 / 通俗洞察"
  }
];

const contacts = [
  { label: "小红书", value: "Mg" },
  { label: "知乎", value: "程子豪" }
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[88svh] px-5 py-6 sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 top-0 h-32 border-b border-line/80 bg-paper/80 backdrop-blur" />
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between py-2">
          <a href="#top" className="text-base font-bold text-ink">
            程子豪
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-ink/70 sm:flex">
            <a className="transition hover:text-ink" href="#about">
              关于我
            </a>
            <a className="transition hover:text-ink" href="#projects">
              项目
            </a>
            <a className="transition hover:text-ink" href="#contact">
              联系
            </a>
          </div>
        </nav>

        <div
          id="top"
          className="relative z-10 mx-auto grid min-h-[76svh] max-w-7xl items-center gap-10 pt-20"
        >
          <div className="absolute right-0 top-24 hidden h-[560px] w-[560px] opacity-85 lg:block">
            <img
              src="/identity-system.svg"
              alt="个人作品系统视觉图"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-semibold text-moss shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>产品思维 x AI 内容系统</span>
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.06] text-ink sm:text-6xl lg:text-7xl">
              程子豪
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-ink/75 sm:text-2xl sm:leading-10">
              我正在用产品思维和 AI 工具，把内容创作、宠物 IP 和个人成长项目做成可持续的作品系统。
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {identityTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line bg-white/70 px-4 py-2 text-sm font-semibold text-ink/80 shadow-sm backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-11 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:-translate-y-0.5 hover:bg-moss"
              >
                查看项目
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-line bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:border-moss/50 hover:bg-white"
              >
                联系我
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-line bg-white/60 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold text-moss">ABOUT</p>
            <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight text-ink sm:text-4xl">
              用产品经理的方法，持续打磨个人作品。
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-9 text-ink/75">
            <p>
              我关注内容创作背后的系统：选题如何形成、角色如何长期生长、观点如何被证据支撑，以及个人成长如何从零散尝试变成可复用的方法。
            </p>
            <p>
              现在的重点，是把 AI 工具放进创作流程里，让宠物 IP、调查型图文和知乎长文都拥有更稳定的生产节奏、更清晰的风格边界和更强的迭代能力。
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-moss">PROJECTS</p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-ink sm:text-4xl">
                正在做的项目
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-ink/60">
              三条内容线分别服务于角色资产、观点表达和个人成长，它们共享一套可持续创作系统。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <a
                  key={project.title}
                  href="#contact"
                  className="project-card group flex min-h-[310px] flex-col justify-between rounded-lg border border-line bg-white/70 p-6 shadow-card backdrop-blur"
                  aria-label={`${project.title}，联系程子豪了解更多`}
                >
                  <div>
                    <div className="mb-7 flex items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-line bg-paper">
                        <Icon className={`h-5 w-5 ${project.accent}`} aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 text-ink/30 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-moss"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-black leading-snug text-ink">
                      {project.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-ink/70">
                      {project.description}
                    </p>
                  </div>
                  <p className="mt-8 border-t border-line pt-5 text-sm font-semibold text-moss">
                    {project.meta}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-10 pt-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-ink/10 shadow-soft">
          <div className="tech-panel grid gap-10 px-6 py-10 text-paper sm:px-10 lg:grid-cols-[1fr_1.2fr] lg:p-12">
            <div>
              <p className="text-sm font-bold text-cyan">CONTACT</p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                合作、交流或一起把想法做成作品。
              </h2>
            </div>

            <div className="grid gap-5">
              <div className="grid gap-3 sm:grid-cols-2">
                {contacts.map((contact) => (
                  <div
                    key={contact.label}
                    className="rounded-md border border-white/10 bg-white/10 px-5 py-4"
                  >
                    <p className="text-sm text-paper/60">{contact.label}</p>
                    <p className="mt-2 text-lg font-bold">{contact.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 rounded-md border border-white/10 bg-paper p-4 text-ink sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink/50">邮箱</p>
                  <p className="mt-1 text-lg font-black">your@email.com</p>
                </div>
                <CopyEmailButton email="your@email.com" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 pb-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 border-t border-line pt-7 text-sm text-ink/50 sm:flex-row">
          <p>© 2026 程子豪</p>
          <p>Built with Next.js, Tailwind CSS and a practical creative system.</p>
        </div>
      </footer>
    </main>
  );
}
