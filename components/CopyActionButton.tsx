"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyActionButtonProps = {
  label: string;
  value: string;
  compact?: boolean;
};

export function CopyActionButton({ label, value, compact = false }: CopyActionButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }

    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className={`inline-flex items-center justify-center gap-2 rounded-md bg-[rgb(var(--foreground))] font-bold text-[rgb(var(--background))] transition hover:-translate-y-0.5 hover:bg-[rgb(var(--accent))] ${
          compact ? "min-h-10 px-3 py-2 text-sm" : "min-h-12 px-5 py-3 text-sm"
        }`}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        <span>{copied ? "已复制" : label}</span>
      </button>

      {copied ? (
        <div className="fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 rounded-full border border-[rgba(var(--line),0.85)] bg-[rgb(var(--surface))] px-4 py-2 text-sm font-bold text-[rgb(var(--foreground))] shadow-2xl">
          复制成功
        </div>
      ) : null}
    </>
  );
}
