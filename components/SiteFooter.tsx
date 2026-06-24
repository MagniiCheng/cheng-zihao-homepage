import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="page-section pb-8 pt-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-[rgba(var(--line),0.88)] pt-8 text-sm text-[rgb(var(--muted))] md:flex-row md:items-center md:justify-between">
        <p>© 2026 {siteConfig.name}</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium transition hover:text-[rgb(var(--foreground))]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
