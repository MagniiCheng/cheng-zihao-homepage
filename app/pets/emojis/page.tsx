import type { Metadata } from "next";
import { EmojiBrowser } from "@/components/EmojiBrowser";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "表情包中心 | 虎虎豹豹",
  description: "虎虎豹豹表情包中心，按虎虎和豹豹分类展示，支持放大查看和下载原图。"
};

export default function PetEmojisPage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <SectionHeader
          eyebrow="Emojis"
          title="表情包中心"
          description="按角色分类管理表情包素材，单张图片可放大查看并下载原图。"
        />
        <EmojiBrowser />
      </section>
    </main>
  );
}
