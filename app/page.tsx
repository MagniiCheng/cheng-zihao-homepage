import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, Sparkles } from "lucide-react";
import { AvatarUploader } from "@/components/AvatarUploader";
import { CopyActionButton } from "@/components/CopyActionButton";
import { SectionHeader } from "@/components/SectionHeader";
import { projects, siteConfig, updates } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section id="home" className="page-section relative min-h-[94svh] overflow-hidden pt-24">
        <div className="hero-grid absolute inset-0 opacity-80" />
        <div className="relative z-10 mx-auto grid min-h-[calc(94svh-6rem)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="order-2 lg:order-1">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(var(--line),0.9)] bg-[rgba(var(--surface),0.72)] px-4 py-2 text-sm font-black text-[rgb(var(--accent))] shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>Personal Brand OS</span>
            </div>

            <h1 className="max-w-4xl text-balance text-5xl font-black leading-[1.03] tracking-[-0.02em] text-[rgb(var(--foreground))] sm:text-7xl lg:text-8xl">
              {siteConfig.name}
            </h1>

            <div className="mt-7 flex flex-wrap gap-3">
              {siteConfig.identities.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(var(--line),0.86)] bg-[rgba(var(--surface),0.72)] px-4 py-2 text-sm font-bold text-[rgb(var(--foreground))] backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-8 max-w-3xl text-balance text-xl leading-9 text-[rgb(var(--muted))] sm:text-2xl sm:leading-10">
              {siteConfig.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[rgb(var(--foreground))] px-5 py-3 text-sm font-black text-[rgb(var(--background))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent))]"
              >
                进入项目中心
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/mg"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[rgba(var(--line),0.9)] bg-[rgba(var(--surface),0.72)] px-5 py-3 text-sm font-black text-[rgb(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent),0.48)]"
              >
                查看 Mg 调查档案
              </Link>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="glass-panel relative w-full max-w-md overflow-hidden rounded-lg p-6">
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(var(--accent),0.14)] to-transparent" />
              <div className="relative flex flex-col items-center gap-6 text-center">
                <AvatarUploader defaultSrc={siteConfig.avatar} name={siteConfig.name} />
                <div>
                  <p className="text-2xl font-black text-[rgb(var(--foreground))]">
                    {siteConfig.name}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[rgb(var(--muted))]">
                    内容生态 / 宠物 IP / 调查档案
                  </p>
                </div>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[rgba(var(--line),0.8)] bg-[rgb(var(--surface-strong))]">
                  <Image
                    src={siteConfig.avatar}
                    alt="Magnii个人品牌视觉"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 420px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="page-section py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Contact"
            title="联系我"
            description="电话和邮箱支持一键复制；内容合作、项目交流和 AI 产品共创都可以从这里开始。"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="quiet-card rounded-lg p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[rgb(var(--muted))]">电话</p>
                  <p className="mt-3 text-2xl font-black text-[rgb(var(--foreground))]">
                    {siteConfig.contacts.phone}
                  </p>
                </div>
                <Phone className="h-6 w-6 text-[rgb(var(--accent))]" />
              </div>
              <div className="mt-6">
                <CopyActionButton label="复制电话" value={siteConfig.contacts.phone} />
              </div>
            </article>

            <article className="quiet-card rounded-lg p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-[rgb(var(--muted))]">邮箱</p>
                  <p className="mt-3 break-all text-2xl font-black text-[rgb(var(--foreground))]">
                    {siteConfig.contacts.email}
                  </p>
                </div>
                <Mail className="h-6 w-6 text-[rgb(var(--accent))]" />
              </div>
              <div className="mt-6">
                <CopyActionButton label="复制邮箱" value={siteConfig.contacts.email} />
              </div>
            </article>

            <article className="quiet-card rounded-lg p-6">
              <p className="text-sm font-bold text-[rgb(var(--muted))]">小红书</p>
              <p className="mt-3 text-2xl font-black text-[rgb(var(--foreground))]">
                {siteConfig.contacts.xiaohongshu}
              </p>
            </article>

            <article className="quiet-card rounded-lg p-6">
              <p className="text-sm font-bold text-[rgb(var(--muted))]">知乎</p>
              <p className="mt-3 text-2xl font-black text-[rgb(var(--foreground))]">
                {siteConfig.contacts.zhihu}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="page-section py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Updates"
            title="最新动态"
            description="官网会作为长期运营的内容底座，持续记录项目上线、栏目更新和产品实验。"
          />

          <div className="quiet-card rounded-lg">
            {updates.map((update, index) => (
              <div
                key={`${update.date}-${update.title}`}
                className={`grid gap-3 px-6 py-5 sm:grid-cols-[160px_1fr] ${
                  index === updates.length - 1 ? "" : "border-b border-[rgba(var(--line),0.85)]"
                }`}
              >
                <time className="font-mono text-sm font-bold text-[rgb(var(--accent))]">
                  {update.date}
                </time>
                <p className="text-lg font-black text-[rgb(var(--foreground))]">
                  {update.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Projects"
            title="内容生态的三条主线"
            description="宠物 IP、调查档案和知乎写作会共享同一套选题、制作、发布和复盘系统。"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="card-link quiet-card flex min-h-[280px] flex-col justify-between rounded-lg p-6"
              >
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[rgb(var(--accent))]">
                    {project.meta}
                  </p>
                  <h3 className="mt-5 text-2xl font-black leading-snug text-[rgb(var(--foreground))]">
                    {project.title}
                  </h3>
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
          </div>
        </div>
      </section>
    </main>
  );
}
