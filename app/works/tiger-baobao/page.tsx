import type { Metadata } from "next";
import { FrameworkPage, ModuleCard, ModuleGrid } from "@/components/FrameworkShell";

export const metadata: Metadata = {
  title: "虎虎豹豹 AI | Magnii",
  description: "虎虎豹豹 AI 页面框架：Overview、虎豹研究所、成长档案、视频作品、建模中心和 Prompt 库。"
};

export default function TigerBaobaoPage() {
  return (
    <FrameworkPage
      title="虎虎豹豹 AI"
      english="Tiger & Baobao AI"
      description="宠物 IP 的内容资产入口，先搭骨架，再逐步放入视频、建模和 Prompt。"
    >
      <ModuleGrid>
        <ModuleCard title="Overview" description="IP 定位、角色关系和当前方向。" href="/pets" />
        <ModuleCard title="虎豹研究所" description="角色设定、世界观和内容实验。" />
        <ModuleCard title="成长档案" description="虎虎和豹豹的成长数据与记录。" href="/pets/growth" />
        <ModuleCard title="视频作品" description="AI 短视频、脚本和发布记录。" />
        <ModuleCard title="建模中心" description="角色模型、视觉设定和素材管理。" />
        <ModuleCard title="Prompt 库" description="宠物 IP 相关提示词与生成流程。" href="/library" />
      </ModuleGrid>
    </FrameworkPage>
  );
}
