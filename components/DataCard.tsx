"use client";

import { StatusBadge } from "./StatusBadge";

type Props = {
  title: string;
  subtitle?: string;
  status?: string;
  children?: React.ReactNode;
};

export function DataCard({ title, subtitle, status, children }: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-semibold text-white">{title}</p>
          {subtitle && <p className="text-xs text-slate-400">{subtitle}</p>}
        </div>
        {status && <StatusBadge status={status} />}
      </div>
      {children && <div className="mt-3 text-sm text-slate-200">{children}</div>}
    </div>
  );
}
