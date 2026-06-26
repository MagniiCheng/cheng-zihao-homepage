import type { Metadata } from "next";
import { FrameworkPage } from "@/components/FrameworkShell";
import { OSWorkspace } from "@/components/OSWorkspace";

export const metadata: Metadata = {
  title: "Magnii OS | Magnii",
  description: "Magnii OS 页面框架，包含身份、偏好、决策、思考和版本栏目。"
};

export default function OSPage() {
  return (
    <FrameworkPage
      title="Magnii OS"
      english="Operating System"
      description="用于沉淀个人身份、偏好、决策、思考和版本变化的中枢页面。"
    >
      <OSWorkspace />
    </FrameworkPage>
  );
}
