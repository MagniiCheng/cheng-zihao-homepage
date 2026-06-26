import type { Metadata } from "next";
import { FrameworkPage, ModuleCard, ModuleGrid } from "@/components/FrameworkShell";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "关于 | Magnii",
  description: "关于 Magnii：简介、联系方式和网站说明。"
};

export default function AboutPage() {
  return (
    <FrameworkPage
      title="关于"
      english="About"
      description="这里先放基础介绍和联系方式，后续再补完整个人说明。"
    >
      <ModuleGrid>
        <ModuleCard
          title="Magnii 简介"
          english="Profile"
          description="产品经理、AI 内容创作者，正在搭建个人内容与作品系统。"
        />
        <ModuleCard
          title="联系方式"
          english="Contact"
          description={`邮箱：${siteConfig.contacts.email} / 小红书：${siteConfig.contacts.xiaohongshu}`}
        />
        <ModuleCard
          title="网站说明"
          english="Site Notes"
          description="当前阶段是 Magnii OS 页面框架搭建，先保证可点击、可浏览、可继续扩展。"
        />
      </ModuleGrid>
    </FrameworkPage>
  );
}
