import type { Metadata } from "next";
import { GalleryManager } from "@/components/GalleryManager";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "照片图库 | 虎虎豹豹",
  description: "虎虎豹豹照片图库，按虎虎、豹豹和家庭照片分类展示，支持本地上传预览、删除和下载原图。"
};

export default function PetGalleryPage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <SectionHeader
          eyebrow="Gallery"
          title="照片图库"
          description="图片管理区已经预留上传、预览、删除和原图下载能力，当前不会向访客开放服务端写入。"
        />
        <GalleryManager />
      </section>
    </main>
  );
}
