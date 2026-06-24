type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[rgb(var(--accent))]">
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-balance text-3xl font-black leading-tight text-[rgb(var(--foreground))] sm:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl text-base leading-8 text-[rgb(var(--muted))]">{description}</p>
      ) : null}
    </div>
  );
}
