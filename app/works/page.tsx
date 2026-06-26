import type { Metadata } from "next";
import { FrameworkPage, ModuleCard, ModuleGrid } from "@/components/FrameworkShell";

export const metadata: Metadata = {
  title: "作品 | Magnii",
  description: "Magnii 作品页面框架：Mg 调查档案、虎虎豹豹 AI、日记手记和 AI 项目。"
};

export default function WorksPage() {
  return (
    <FrameworkPage
      title="作品"
      english="Works"
      description="所有对外作品先在这里建立入口，后续逐个栏目深挖。"
    >
      <ModuleGrid>
        <ModuleCard
          title="Mg 调查档案"
          english="Research Archive"
          description="故事化研究商业、消费、游戏和社会现象。"
          href="/works/research-archive"
        />
        <ModuleCard
          title="虎虎豹豹 AI"
          english="Tiger & Baobao AI"
          description="宠物 IP、AI 视频、建模和 Prompt 资产。"
          href="/works/tiger-baobao"
        />
        <ModuleCard
          title="日记手记"
          english="Journal"
          description="个人观察、生活记录和阶段复盘的入口。"
        />
        <ModuleCard
          title="AI 项目"
          english="AI Projects"
          description="未来 AI 工具、实验产品和内容自动化项目。"
          href="/ai"
        />
      </ModuleGrid>
    </FrameworkPage>
  );
}
