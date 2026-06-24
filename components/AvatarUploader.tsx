"use client";

import { Camera, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type AvatarUploaderProps = {
  defaultSrc: string;
  name: string;
};

export function AvatarUploader({ defaultSrc, name }: AvatarUploaderProps) {
  const [preview, setPreview] = useState(defaultSrc);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  function handleFile(file?: File) {
    if (!file) {
      return;
    }

    const nextPreview = URL.createObjectURL(file);
    if (preview.startsWith("blob:")) {
      URL.revokeObjectURL(preview);
    }
    setPreview(nextPreview);
  }

  return (
    <div className="flex flex-col items-center gap-4 sm:items-start">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="group relative h-36 w-36 overflow-hidden rounded-full border border-[rgba(var(--line),0.88)] bg-[rgb(var(--surface-strong))] shadow-2xl"
        aria-label="上传或替换头像"
      >
        <img src={preview} alt={name} className="h-full w-full object-cover" />
        <span className="absolute inset-0 flex items-center justify-center bg-black/42 opacity-0 transition group-hover:opacity-100">
          <Camera className="h-7 w-7 text-white" />
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="sr-only"
        onChange={(event) => handleFile(event.target.files?.[0])}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[rgba(var(--line),0.9)] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-bold text-[rgb(var(--foreground))] transition hover:-translate-y-0.5 hover:border-[rgba(var(--accent),0.45)]"
      >
        <RefreshCw className="h-4 w-4" />
        上传 / 替换头像
      </button>
    </div>
  );
}
