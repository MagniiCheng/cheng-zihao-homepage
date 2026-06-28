"use client";

import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { useMemo, useState } from "react";

export type ResearchArchiveListItem = {
  id: string;
  displayId: string;
  title: string;
  summary: string;
  date: string;
  dateLabel: string;
  year: string;
  tags: string[];
  cover: string;
  detailHref: string;
};

type ResearchArchiveBrowserProps = {
  entries: ResearchArchiveListItem[];
  tags: string[];
};

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, "");
}

export function ResearchArchiveBrowser({ entries, tags }: ResearchArchiveBrowserProps) {
  const [activeTag, setActiveTag] = useState("全部");
  const [query, setQuery] = useState("");

  const filteredEntries = useMemo(() => {
    const normalizedQuery = normalize(query);

    return entries.filter((entry) => {
      const matchesTag = activeTag === "全部" || entry.tags.includes(activeTag);
      const searchable = normalize(`${entry.id}${entry.displayId}${entry.title}${entry.tags.join("")}`);
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);

      return matchesTag && matchesQuery;
    });
  }, [activeTag, entries, query]);

  const years = Array.from(new Set(filteredEntries.map((entry) => entry.year)));

  return (
    <section className="rounded-[36px] border border-[#E4E5E2] bg-white p-7 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-10 lg:p-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm text-[#8A8C88]">Filter</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["全部", ...tags].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-[#155F36] text-white"
                    : "bg-[#F4F4F2] text-[#6D706D] hover:bg-[rgba(21,95,54,0.08)] hover:text-[#155F36]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <label className="relative block w-full lg:w-[340px]">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A8C88]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="h-12 w-full rounded-full border border-[#E4E5E2] bg-white pl-11 pr-4 text-sm text-[#151515] outline-none transition focus:border-[rgba(21,95,54,0.45)]"
          />
        </label>
      </div>

      <div className="mt-12">
        {years.length ? (
          years.map((year) => (
            <section key={year} className="border-t border-[#151515] py-10 first:border-t-0 first:pt-0">
              <h2 className="text-5xl font-semibold leading-none tracking-[-0.06em] text-[#151515]">
                {year}
              </h2>

              <div className="mt-8 grid gap-6">
                {filteredEntries
                  .filter((entry) => entry.year === year)
                  .map((entry) => (
                    <article
                      key={entry.id}
                      className="rounded-[28px] border border-[#E4E5E2] bg-white p-6 transition-all duration-[250ms] hover:-translate-y-1 hover:border-[rgba(21,95,54,0.28)] sm:p-8 lg:min-h-[360px]"
                    >
                      <div className="grid gap-6 lg:grid-cols-[52fr_48fr] lg:items-stretch lg:gap-8">
                        <div className="flex min-w-0 flex-col">
                          <p className="text-xl font-semibold leading-none text-[#155F36]">
                            {entry.displayId}
                          </p>

                          <Link href={entry.detailHref} className="group mt-5 block">
                            <h3 className="line-clamp-2 h-[72px] max-w-5xl text-[30px] font-semibold leading-[1.18] tracking-[-0.05em] text-[#151515] transition-colors group-hover:text-[#155F36] sm:h-[96px] sm:text-[40px]">
                              {entry.title}
                            </h3>
                          </Link>

                          <p className="mt-4 line-clamp-2 max-w-3xl whitespace-pre-line text-xl leading-[1.6] text-[#6D706D]">
                            {entry.summary}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {entry.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-[rgba(21,95,54,0.08)] px-3 py-1.5 text-xs font-medium text-[#155F36]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="mt-6 flex flex-col gap-4 border-t border-[#E4E5E2] pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-auto">
                            <p className="text-sm font-medium text-[#8A8C88]">{entry.dateLabel}</p>
                            <Link
                              href={entry.detailHref}
                              className="inline-flex h-12 w-fit items-center gap-2 rounded-full bg-[#155F36] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0F4E2C]"
                            >
                              阅读全文
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>

                        <Link
                          href={entry.detailHref}
                          className="block h-[260px] overflow-hidden rounded-[24px] border border-[#E4E5E2] bg-[#111111] p-3 lg:self-center"
                          aria-label={`阅读全文：${entry.title}`}
                        >
                          <img
                            src={entry.cover}
                            alt={`${entry.displayId} ${entry.title}`}
                            className="h-full w-full object-contain object-center"
                          />
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
            </section>
          ))
        ) : (
          <div className="border-t border-[#E4E5E2] py-16 text-center text-[#6D706D]">
            没有找到匹配的档案。
          </div>
        )}
      </div>
    </section>
  );
}
