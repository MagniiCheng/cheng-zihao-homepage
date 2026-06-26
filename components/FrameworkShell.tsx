import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PageTitleProps = {
  title: string;
  english: string;
  description?: string;
};

type ModuleCardProps = {
  title: string;
  english?: string;
  description?: string;
  href?: string;
};

export function PageTitle({ title, english, description }: PageTitleProps) {
  return (
    <header className="mb-10">
      <h1 className="text-balance text-4xl font-black tracking-[-0.02em] text-[rgb(var(--foreground))] sm:text-6xl">
        {title}
      </h1>
      <p className="mt-3 text-lg font-black uppercase tracking-[0.22em] text-[rgb(var(--accent))]">
        {english}
      </p>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-8 text-[rgb(var(--muted))]">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function ModuleCard({ title, english, description, href }: ModuleCardProps) {
  const content = (
    <>
      <div>
        {english ? (
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[rgb(var(--accent))]">
            {english}
          </p>
        ) : null}
        <h2 className="mt-3 text-2xl font-black text-[rgb(var(--foreground))]">{title}</h2>
        {description ? (
          <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">{description}</p>
        ) : null}
      </div>
      {href ? (
        <span className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[rgb(var(--foreground))]">
          进入
          <ArrowUpRight className="h-4 w-4" />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="card-link quiet-card flex min-h-48 flex-col justify-between rounded-lg p-6"
      >
        {content}
      </Link>
    );
  }

  return <article className="quiet-card min-h-48 rounded-lg p-6">{content}</article>;
}

export function ModuleGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{children}</div>;
}

export function FrameworkPage({
  title,
  english,
  description,
  children
}: PageTitleProps & {
  children: React.ReactNode;
}) {
  return (
    <main className="page-section pt-28">
      <section className="mx-auto max-w-7xl py-12">
        <PageTitle title={title} english={english} description={description} />
        {children}
      </section>
    </main>
  );
}
