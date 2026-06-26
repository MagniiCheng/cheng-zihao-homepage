import type { Metadata } from "next";
import { FrameworkPage, ModuleCard, ModuleGrid } from "@/components/FrameworkShell";

export const metadata: Metadata = {
  title: "资料库 | Magnii",
  description: "Magnii 资料库页面框架：Prompt、HTML、PDF、Template、Workflow 和 Download。"
};

export default function LibraryPage() {
  return (
    <FrameworkPage
      title="资料库"
      english="Library"
      description="统一收纳可复用材料、模板、文件和工作流。"
    >
      <ModuleGrid>
        <ModuleCard title="Prompt" description="提示词、角色设定和生成流程。" />
        <ModuleCard title="HTML" description="页面模板、组件片段和可视化原型。" />
        <ModuleCard title="PDF" description="文章、档案和下载文档。" href="/resources" />
        <ModuleCard title="Template" description="复用模板、结构化文档和项目框架。" />
        <ModuleCard title="Workflow" description="内容生产、研究和发布流程。" />
        <ModuleCard title="Download" description="统一下载入口。" href="/resources" />
      </ModuleGrid>
    </FrameworkPage>
  );
}
