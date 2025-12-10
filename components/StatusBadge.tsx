"use client";

type Props = { status: string };

const colorMap: Record<string, string> = {
  open: "bg-amber-500/15 text-amber-200",
  in_progress: "bg-cyan-500/15 text-cyan-200",
  resolved: "bg-emerald-500/15 text-emerald-200",
};

export function StatusBadge({ status }: Props) {
  const cls = colorMap[status] ?? "bg-slate-500/15 text-slate-200";
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cls}`}>{status.replace("_", " ")}</span>;
}
