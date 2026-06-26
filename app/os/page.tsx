import type { Metadata } from "next";
import { OSWorkspace } from "@/components/OSWorkspace";

export const metadata: Metadata = {
  title: "Magnii OS | Magnii",
  description: "一个现代、克制、有秩序的数字工作空间，用来记录和理解 Magnii。"
};

export default function OSPage() {
  return (
    <main className="min-h-screen bg-[#F6F5F2] pt-16 font-['PingFang_SC',Inter,ui-sans-serif,system-ui,sans-serif]">
      <OSWorkspace />
    </main>
  );
}
