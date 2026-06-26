import type { Metadata } from "next";
import { FrameworkPage, ModuleCard, ModuleGrid } from "@/components/FrameworkShell";

export const metadata: Metadata = {
  title: "工作台 | Magnii",
  description: "Magnii OS 工作台：首页聚合当前聚焦、收件箱、正在进行、完成归档和快速入口。"
};

export default function HomePage() {
  return (
    <FrameworkPage
      title="工作台"
      english="Workbench"
      description="先把所有入口摆到桌面上，方便后续逐页打磨。"
    >
      <ModuleGrid>
        <ModuleCard
          title="当前聚焦"
          english="Focus"
          description="记录当前最重要的一件事，避免项目线索分散。"
        />
        <ModuleCard
          title="收件箱"
          english="Inbox"
          description="临时想法、待处理材料和新需求先进入这里。"
        />
        <ModuleCard
          title="正在进行"
          english="In Progress"
          description="展示正在推进的内容、产品和生活项目。"
        />
        <ModuleCard
          title="完成归档"
          english="Archive"
          description="已经完成的作品、阶段成果和复盘记录。"
        />
        <ModuleCard
          title="快速入口"
          english="Quick Links"
          description="通往作品、生活、资料库和 OS 的核心入口。"
          href="/works"
        />
      </ModuleGrid>
    </FrameworkPage>
  );
}
