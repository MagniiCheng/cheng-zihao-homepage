import type { Metadata } from "next";
import { FrameworkPage, ModuleCard, ModuleGrid } from "@/components/FrameworkShell";

export const metadata: Metadata = {
  title: "生活 | Magnii",
  description: "Magnii 生活页面框架：Pets、Travel、Food、Cosplay 和 Daily。"
};

export default function LifePage() {
  return (
    <FrameworkPage
      title="生活"
      english="Life"
      description="把生活记录拆成可持续维护的栏目，先有入口，后续再补内容。"
    >
      <ModuleGrid>
        <ModuleCard title="Pets" description="虎虎、豹豹和宠物日常。" href="/pets" />
        <ModuleCard title="Travel" description="旅行记录、城市观察和路线整理。" />
        <ModuleCard title="Food" description="餐厅、外卖、消费体验和味觉笔记。" />
        <ModuleCard title="Cosplay" description="造型、拍摄、角色与素材管理。" />
        <ModuleCard title="Daily" description="日常记录、碎片想法和轻量复盘。" />
      </ModuleGrid>
    </FrameworkPage>
  );
}
