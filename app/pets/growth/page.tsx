import type { Metadata } from "next";
import { PetGrowthArchive } from "@/components/PetGrowthArchive";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "成长档案 | 虎虎豹豹",
  description:
    "虎虎豹豹成长档案，左右双栏展示虎虎和豹豹的基础信息、成长统计、体重折线图、时间轴和照片预留区。"
};

export default function PetGrowthPage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <SectionHeader
          eyebrow="Growth Archive"
          title="成长档案"
          description="虎虎和豹豹分栏展示，数据自动计算，体重折线图和成长时间轴各自独立，方便长期追加记录。"
        />
        <PetGrowthArchive />
      </section>
    </main>
  );
}
