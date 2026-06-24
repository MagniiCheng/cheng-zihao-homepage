"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig } from "@/lib/site-data";

function isActive(pathname: string, href: string) {
  if (href === "/#home") {
    return pathname === "/";
  }

  if (href.startsWith("/#")) {
    return false;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(var(--line),0.75)] bg-[rgba(var(--background),0.82)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/#home"
          className="flex items-center gap-3 text-sm font-black tracking-wide text-[rgb(var(--foreground))]"
          onClick={() => setOpen(false)}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[rgba(var(--line),0.85)] bg-[rgb(var(--surface-strong))]">
            <img src={siteConfig.avatar} alt="" className="h-full w-full object-cover" />
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                isActive(pathname, item.href)
                  ? "bg-[rgba(var(--foreground),0.08)] text-[rgb(var(--foreground))]"
                  : "text-[rgb(var(--muted))] hover:bg-[rgba(var(--foreground),0.06)] hover:text-[rgb(var(--foreground))]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(var(--line),0.9)] bg-[rgb(var(--surface))] text-[rgb(var(--foreground))] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "关闭导航" : "打开导航"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[rgba(var(--line),0.75)] bg-[rgb(var(--background))] px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-[rgb(var(--foreground))] hover:bg-[rgba(var(--foreground),0.06)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
