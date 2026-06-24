"use client";

import { Download, ImagePlus, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { galleryItems } from "@/lib/site-data";

type GalleryItem = {
  title: string;
  category: string;
  src: string;
  uploaded?: boolean;
};

const categories = ["全部", "虎虎", "豹豹", "家庭照片"];

export function GalleryManager() {
  const [items, setItems] = useState<GalleryItem[]>(galleryItems);
  const [category, setCategory] = useState("全部");
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const itemsRef = useRef<GalleryItem[]>(galleryItems);

  const visibleItems = useMemo(() => {
    if (category === "全部") {
      return items;
    }

    return items.filter((item) => item.category === category);
  }, [category, items]);

  useEffect(() => {
    itemsRef.current = items;
  }, [items]);

  useEffect(() => {
    return () => {
      itemsRef.current.forEach((item) => {
        if (item.uploaded && item.src.startsWith("blob:")) {
          URL.revokeObjectURL(item.src);
        }
      });
    };
  }, []);

  function handleUpload(files?: FileList | null) {
    if (!files?.length) {
      return;
    }

    const nextItems = Array.from(files).map((file) => ({
      title: file.name.replace(/\.[^/.]+$/, ""),
      category: category === "全部" ? "家庭照片" : category,
      src: URL.createObjectURL(file),
      uploaded: true
    }));

    setItems((current) => [...nextItems, ...current]);
  }

  function handleDelete(item: GalleryItem) {
    setItems((current) => current.filter((candidate) => candidate.src !== item.src));
    if (item.uploaded && item.src.startsWith("blob:")) {
      URL.revokeObjectURL(item.src);
    }
    if (selected?.src === item.src) {
      setSelected(null);
    }
  }

  return (
    <>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                category === item
                  ? "bg-[rgb(var(--foreground))] text-[rgb(var(--background))]"
                  : "border border-[rgba(var(--line),0.9)] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] hover:border-[rgba(var(--accent),0.45)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[rgb(var(--foreground))] px-4 py-2 text-sm font-bold text-[rgb(var(--background))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent))]"
        >
          <ImagePlus className="h-4 w-4" />
          上传图片
        </button>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="sr-only"
          onChange={(event) => handleUpload(event.target.files)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <article key={item.src} className="quiet-card rounded-lg p-4">
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="aspect-[4/3] w-full overflow-hidden rounded-md bg-[rgb(var(--surface-strong))]"
              aria-label={`预览 ${item.title}`}
            >
              <img src={item.src} alt={item.title} className="h-full w-full object-cover" />
            </button>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-black text-[rgb(var(--foreground))]">{item.title}</p>
                <p className="mt-1 text-xs font-semibold text-[rgb(var(--muted))]">
                  {item.category}
                </p>
              </div>
              <div className="flex gap-2">
                <a
                  href={item.src}
                  download
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(var(--line),0.9)] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent),0.45)]"
                  aria-label={`下载 ${item.title}`}
                >
                  <Download className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => handleDelete(item)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(var(--line),0.9)] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent-3),0.55)]"
                  aria-label={`删除 ${item.title}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/72 p-5 backdrop-blur">
          <div className="w-full max-w-4xl rounded-lg border border-white/15 bg-[rgb(var(--surface))] p-4 shadow-2xl">
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
              className="max-h-[72vh] w-full rounded-md object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
