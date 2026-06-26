import type { Metadata } from "next";
import { FrameworkPage, ModuleCard, ModuleGrid } from "@/components/FrameworkShell";

export const metadata: Metadata = {
  title: "Mg 调查档案 | Magnii",
  description: "Mg 调查档案页面框架：Overview、Archive、Series、Research Lab 和 Download。"
};

export default function ResearchArchivePage() {
  return (
    <FrameworkPage
      title="Mg 调查档案"
      english="Research Archive"
      description="先建立调查档案的栏目骨架，后续再迁移具体文章、证据和下载资源。"
    >
      <ModuleGrid>
        <ModuleCard title="Overview" description="栏目定位、代表内容和更新说明。" />
        <ModuleCard title="Archive" description="所有调查档案文章列表。" href="/mg" />
        <ModuleCard title="Series" description="专题系列与长期观察主题。" />
        <ModuleCard title="Research Lab" description="选题、证据、资料和分析流程。" />
        <ModuleCard title="Download" description="PDF、资料包和归档文件下载。" href="/resources" />
      </ModuleGrid>
    </FrameworkPage>
  );
}
