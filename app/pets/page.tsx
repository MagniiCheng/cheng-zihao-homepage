import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cake, Cat, Dog } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { pets } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "虎虎豹豹 | Magnii",
  description: "虎虎豹豹 AI 宠物 IP 官网专区：缅因猫虎虎与萨摩耶豹豹的角色设定、成长档案、表情包和图库。"
};

export default function PetsPage() {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <SectionHeader
          eyebrow="Huhu & Baobao"
          title="虎虎豹豹 AI 宠物 IP"
          description="以缅因猫虎虎和萨摩耶豹豹为主角，持续探索 AI 视频、角色设定和内容 IP 化。"
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {pets.map((pet) => (
            <article key={pet.name} className="quiet-card overflow-hidden rounded-lg">
              <div className="relative aspect-[16/10] bg-[rgb(var(--surface-strong))]">
                <Image
                  src={pet.image}
                  alt={`${pet.name} 角色视觉`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-3xl font-black text-[rgb(var(--foreground))]">
                      {pet.name}
                    </h2>
                    <p className="mt-2 flex items-center gap-2 text-sm font-bold text-[rgb(var(--muted))]">
                      {pet.species === "缅因猫" ? (
                        <Cat className="h-4 w-4" />
                      ) : (
                        <Dog className="h-4 w-4" />
                      )}
                      {pet.species}
                    </p>
                  </div>
                  <p className="flex items-center gap-2 rounded-md bg-[rgba(var(--accent),0.12)] px-3 py-2 text-sm font-black text-[rgb(var(--accent))]">
                    <Cake className="h-4 w-4" />
                    {pet.birthday}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {pet.traits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full border border-[rgba(var(--line),0.9)] px-3 py-1 text-sm font-bold text-[rgb(var(--foreground))]"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { label: "成长档案", href: "/pets/growth" },
            { label: "表情包中心", href: "/pets/emojis" },
            { label: "照片图库", href: "/pets/gallery" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="card-link quiet-card flex items-center justify-between rounded-lg p-5 text-lg font-black text-[rgb(var(--foreground))]"
            >
              {item.label}
              <ArrowUpRight className="h-5 w-5 text-[rgb(var(--accent))]" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
