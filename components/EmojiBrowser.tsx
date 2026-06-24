"use client";

import { Download, Maximize2, X } from "lucide-react";
import { useState } from "react";
import { emojis } from "@/lib/site-data";

type EmojiItem = (typeof emojis)[number]["items"][number] & {
  category: string;
};

export function EmojiBrowser() {
  const [category, setCategory] = useState(emojis[0]?.category ?? "虎虎");
  const [selected, setSelected] = useState<EmojiItem | null>(null);
  const items = emojis.find((group) => group.category === category)?.items ?? [];

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {emojis.map((group) => (
          <button
            type="button"
            key={group.category}
            onClick={() => setCategory(group.category)}
            className={`rounded-md px-4 py-2 text-sm font-bold transition ${
              category === group.category
                ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                : "border border-[rgba(var(--line),0.9)] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] hover:border-[rgba(var(--accent),0.45)]"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <article key={item.src} className="quiet-card rounded-lg p-4">
            <button
              type="button"
              onClick={() => setSelected({ ...item, category })}
              className="group relative aspect-square w-full overflow-hidden rounded-md bg-[rgb(var(--surface-strong))]"
              aria-label={`放大查看 ${item.title}`}
            >
              <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
              <span className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white opacity-0 transition group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black text-[rgb(var(--foreground))]">{item.title}</p>
                <p className="mt-1 text-xs font-semibold text-[rgb(var(--muted))]">{category}</p>
              </div>
              <a
                href={item.src}
                download
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(var(--line),0.9)] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent),0.45)]"
                aria-label={`下载 ${item.title}`}
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/72 p-5 backdrop-blur">
          <div className="w-full max-w-xl rounded-lg border border-white/15 bg-[rgb(var(--surface))] p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-base font-black text-[rgb(var(--foreground))]">
                  {selected.title}
                </p>
                <p className="text-sm text-[rgb(var(--muted))]">{selected.category}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(var(--line),0.9)]"
                aria-label="关闭预览"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <img
              src={selected.src}
              alt={selected.title}
              className="aspect-square w-full rounded-md object-cover"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
