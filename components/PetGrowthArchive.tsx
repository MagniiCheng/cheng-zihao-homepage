import { Camera, CalendarDays, LineChart, PawPrint, Scale, TrendingUp } from "lucide-react";
import { getAllPetGrowthStats, getGrowthComparison, type PetGrowthStats } from "@/lib/pet-growth";
import { growthStatisticsAsOf, petTimeline } from "@/lib/site-data";

type PetTone = "cool" | "warm";

const toneStyles: Record<
  PetTone,
  {
    label: string;
    shell: string;
    soft: string;
    text: string;
    stroke: string;
    dot: string;
  }
> = {
  cool: {
    label: "冷感猫咪线",
    shell: "border-[rgba(71,204,198,0.34)] bg-[rgba(71,204,198,0.055)]",
    soft: "bg-[rgba(71,204,198,0.11)]",
    text: "text-[rgb(var(--accent))]",
    stroke: "rgb(var(--accent))",
    dot: "bg-[rgb(var(--accent))]"
  },
  warm: {
    label: "暖感狗狗线",
    shell: "border-[rgba(224,149,86,0.34)] bg-[rgba(224,149,86,0.07)]",
    soft: "bg-[rgba(224,149,86,0.12)]",
    text: "text-[rgb(var(--accent-2))]",
    stroke: "rgb(var(--accent-2))",
    dot: "bg-[rgb(var(--accent-2))]"
  }
};

function formatKg(value: number, digits = 1) {
  return `${value.toFixed(digits)}kg`;
}

function formatSignedKg(value: number) {
  return `+${formatKg(value)}`;
}

function formatMonthlyGain(value: number) {
  return value < 1 ? `约${value.toFixed(2)}kg` : `约${value.toFixed(1)}kg`;
}

function formatDate(value: string) {
  return value.replaceAll("-", ".");
}

function parseDateValue(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return Date.UTC(year, month - 1, day);
}

function SectionCard({
  title,
  children,
  tone
}: {
  title: string;
  children: React.ReactNode;
  tone: PetTone;
}) {
  const styles = toneStyles[tone];

  return (
    <section className={`rounded-lg border p-5 ${styles.shell}`}>
      <h3 className="text-lg font-black text-[rgb(var(--foreground))]">{title}</h3>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function MiniMetric({
  label,
  value,
  tone
}: {
  label: string;
  value: string;
  tone: PetTone;
}) {
  const styles = toneStyles[tone];

  return (
    <div className="rounded-md border border-[rgba(var(--line),0.78)] bg-[rgba(var(--surface),0.72)] p-4">
      <p className="text-xs font-bold text-[rgb(var(--muted))]">{label}</p>
      <p className={`mt-2 text-xl font-black tracking-tight ${styles.text}`}>{value}</p>
    </div>
  );
}

function OverviewComparison() {
  const { huhu, baobao } = getGrowthComparison();
  const rows = [
    {
      label: "当前体重",
      icon: Scale,
      huhu: formatKg(huhu.currentWeightKg),
      baobao: formatKg(baobao.currentWeightKg)
    },
    {
      label: "累计增重",
      icon: TrendingUp,
      huhu: formatSignedKg(huhu.gainKg),
      baobao: formatSignedKg(baobao.gainKg)
    },
    {
      label: "到家天数",
      icon: CalendarDays,
      huhu: `${huhu.homeDays}天`,
      baobao: `${baobao.homeDays}天`
    },
    {
      label: "平均每日增重",
      icon: LineChart,
      huhu: `${huhu.dailyGainG}g/天`,
      baobao: `${baobao.dailyGainG}g/天`
    }
  ];

  return (
    <section className="rounded-lg border border-[rgba(var(--line),0.86)] bg-[rgba(var(--surface),0.74)] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur sm:p-6">
      <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-[rgb(var(--accent))]">
            Overview
          </p>
          <h2 className="mt-3 text-3xl font-black text-[rgb(var(--foreground))]">
            虎虎 vs 豹豹
          </h2>
        </div>
        <p className="text-sm font-bold text-[rgb(var(--muted))]">
          统计截止 {formatDate(growthStatisticsAsOf)}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {rows.map((row) => {
          const Icon = row.icon;

          return (
            <article key={row.label} className="quiet-card rounded-lg p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[rgba(var(--foreground),0.06)]">
                  <Icon className="h-5 w-5 text-[rgb(var(--accent))]" />
                </span>
                <h3 className="text-base font-black text-[rgb(var(--foreground))]">{row.label}</h3>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-md bg-[rgba(var(--accent),0.1)] p-3">
                  <p className="text-xs font-bold text-[rgb(var(--muted))]">虎虎</p>
                  <p className="mt-2 text-xl font-black text-[rgb(var(--foreground))]">
                    {row.huhu}
                  </p>
                </div>
                <div className="rounded-md bg-[rgba(var(--accent-2),0.12)] p-3">
                  <p className="text-xs font-bold text-[rgb(var(--muted))]">豹豹</p>
                  <p className="mt-2 text-xl font-black text-[rgb(var(--foreground))]">
                    {row.baobao}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function BasicInfoCard({ stats, tone }: { stats: PetGrowthStats; tone: PetTone }) {
  return (
    <SectionCard title="基础信息卡片" tone={tone}>
      <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {[
          ["品种", stats.species],
          ["生日", stats.birthday],
          ["到家日期", stats.arrivalDate],
          ["初始体重", formatKg(stats.initialWeightKg)]
        ].map(([label, value]) => (
          <div key={label} className="rounded-md bg-[rgba(var(--surface),0.72)] p-4">
            <dt className="text-xs font-bold text-[rgb(var(--muted))]">{label}</dt>
            <dd className="mt-2 text-lg font-black text-[rgb(var(--foreground))]">{value}</dd>
          </div>
        ))}
      </dl>
    </SectionCard>
  );
}

function GrowthStatsCard({ stats, tone }: { stats: PetGrowthStats; tone: PetTone }) {
  return (
    <SectionCard title="成长统计卡片" tone={tone}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <MiniMetric label="当前年龄" value={stats.currentAge} tone={tone} />
        <MiniMetric label="到家天数" value={`${stats.homeDays}天`} tone={tone} />
        <MiniMetric label="当前体重" value={formatKg(stats.currentWeightKg)} tone={tone} />
        <MiniMetric label="累计增重" value={formatSignedKg(stats.gainKg)} tone={tone} />
        <MiniMetric label="平均每月增重" value={formatMonthlyGain(stats.monthlyGainKg)} tone={tone} />
        <MiniMetric label="平均每日增重" value={`约${stats.dailyGainG}g`} tone={tone} />
        <MiniMetric label="体重增长" value={`${stats.growthPercent.toFixed(1)}%`} tone={tone} />
      </div>
    </SectionCard>
  );
}

function PetWeightChart({ stats, tone }: { stats: PetGrowthStats; tone: PetTone }) {
  const styles = toneStyles[tone];
  const records = stats.weightRecords;
  const minDate = Math.min(...records.map((record) => parseDateValue(record.date)));
  const maxDate = Math.max(...records.map((record) => parseDateValue(record.date)));
  const minWeight = Math.min(...records.map((record) => record.weightKg));
  const maxWeight = Math.max(...records.map((record) => record.weightKg));
  const chart = { width: 560, height: 250, left: 48, right: 22, top: 26, bottom: 42 };
  const innerWidth = chart.width - chart.left - chart.right;
  const innerHeight = chart.height - chart.top - chart.bottom;

  function x(date: string) {
    if (maxDate === minDate) {
      return chart.left + innerWidth / 2;
    }

    return chart.left + ((parseDateValue(date) - minDate) / (maxDate - minDate)) * innerWidth;
  }

  function y(weight: number) {
    if (maxWeight === minWeight) {
      return chart.top + innerHeight / 2;
    }

    return chart.top + (1 - (weight - minWeight) / (maxWeight - minWeight)) * innerHeight;
  }

  const path = records
    .map((record, index) => `${index === 0 ? "M" : "L"} ${x(record.date)},${y(record.weightKg)}`)
    .join(" ");

  return (
    <SectionCard title="体重增长折线图" tone={tone}>
      <svg
        viewBox={`0 0 ${chart.width} ${chart.height}`}
        className="h-auto w-full"
        role="img"
        aria-label={`${stats.name}体重增长折线图`}
      >
        {[0, 1, 2].map((line) => {
          const yPosition = chart.top + (line / 2) * innerHeight;
          return (
            <line
              key={line}
              x1={chart.left}
              x2={chart.width - chart.right}
              y1={yPosition}
              y2={yPosition}
              stroke="rgba(128,128,128,0.22)"
              strokeWidth="1"
            />
          );
        })}
        <path d={path} fill="none" stroke={styles.stroke} strokeWidth="5" strokeLinecap="round" />
        {records.map((record) => (
          <g key={`${record.date}-${record.weightKg}`}>
            <circle
              cx={x(record.date)}
              cy={y(record.weightKg)}
              r="6"
              fill={styles.stroke}
              stroke="rgb(var(--surface))"
              strokeWidth="3"
            />
            <text
              x={x(record.date)}
              y={Math.max(14, y(record.weightKg) - 14)}
              textAnchor="middle"
              fill="rgb(var(--muted))"
              fontSize="13"
              fontWeight="700"
            >
              {formatKg(record.weightKg)}
            </text>
          </g>
        ))}
        <text x={chart.left} y={chart.height - 12} fill="rgb(var(--muted))" fontSize="13">
          {formatDate(records[0]?.date ?? growthStatisticsAsOf)}
        </text>
        <text
          x={chart.width - chart.right}
          y={chart.height - 12}
          fill="rgb(var(--muted))"
          fontSize="13"
          textAnchor="end"
        >
          {formatDate(records.at(-1)?.date ?? growthStatisticsAsOf)}
        </text>
      </svg>
    </SectionCard>
  );
}

function PetTimelineCard({ stats, tone }: { stats: PetGrowthStats; tone: PetTone }) {
  const styles = toneStyles[tone];
  const records = petTimeline
    .filter((item) => item.pet === stats.name)
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <SectionCard title="成长时间轴" tone={tone}>
      <ol className="relative border-l border-[rgba(var(--line),0.9)] pl-6">
        {records.map((item) => (
          <li key={`${item.date}-${item.title}`} className="relative pb-8 last:pb-0">
            <span
              className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full ring-4 ring-[rgb(var(--surface))] ${styles.dot}`}
            />
            <time className={`font-mono text-xs font-black ${styles.text}`}>{item.date}</time>
            <h4 className="mt-2 text-lg font-black text-[rgb(var(--foreground))]">{item.title}</h4>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}

function PetPhotosPlaceholder({ stats, tone }: { stats: PetGrowthStats; tone: PetTone }) {
  const styles = toneStyles[tone];

  return (
    <SectionCard title="成长照片预留区" tone={tone}>
      <div className={`flex min-h-44 flex-col items-center justify-center rounded-lg ${styles.soft} p-6 text-center`}>
        <Camera className={`h-8 w-8 ${styles.text}`} />
        <p className="mt-4 text-lg font-black text-[rgb(var(--foreground))]">
          {stats.name}成长照片
        </p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[rgb(var(--muted))]">
          这里预留照片记录组件，后续可按日期绑定体重、身高、疫苗和体检记录。
        </p>
      </div>
    </SectionCard>
  );
}

function PetGrowthColumn({ stats, tone }: { stats: PetGrowthStats; tone: PetTone }) {
  const styles = toneStyles[tone];

  return (
    <article className={`flex h-full flex-col gap-5 rounded-xl border p-4 sm:p-5 ${styles.shell}`}>
      <header className="quiet-card rounded-lg p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className={`text-sm font-black uppercase tracking-[0.22em] ${styles.text}`}>
              {styles.label}
            </p>
            <h2 className="mt-3 text-4xl font-black text-[rgb(var(--foreground))]">
              {stats.name}成长档案
            </h2>
          </div>
          <span className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${styles.soft}`}>
            <PawPrint className={`h-6 w-6 ${styles.text}`} />
          </span>
        </div>
      </header>

      <BasicInfoCard stats={stats} tone={tone} />
      <GrowthStatsCard stats={stats} tone={tone} />
      <PetWeightChart stats={stats} tone={tone} />
      <PetTimelineCard stats={stats} tone={tone} />
      <PetPhotosPlaceholder stats={stats} tone={tone} />
    </article>
  );
}

export function PetGrowthArchive() {
  const stats = getAllPetGrowthStats();
  const huhu = stats.find((item) => item.name === "虎虎");
  const baobao = stats.find((item) => item.name === "豹豹");

  if (!huhu || !baobao) {
    throw new Error("Missing growth stats for 虎虎 or 豹豹.");
  }

  return (
    <div className="grid gap-10">
      <OverviewComparison />

      <section className="grid items-stretch gap-6 lg:grid-cols-2">
        <PetGrowthColumn stats={huhu} tone="cool" />
        <PetGrowthColumn stats={baobao} tone="warm" />
      </section>
    </div>
  );
}
