import type { Metadata } from "next";
import { OSWorkspace } from "@/components/OSWorkspace";

export const metadata: Metadata = {
  title: "原则 | Magnii OS",
  description: "Magnii 的运行原则，记录如何思考问题、做决定、构建作品和长期成长。"
};

export default function OSPrinciplesPage() {
  return (
    <main className="min-h-screen bg-[#F6F5F2] pt-16 font-['PingFang_SC',Inter,ui-sans-serif,system-ui,sans-serif]">
      <OSWorkspace initialSectionTitle="原则" />
    </main>
  );
}
