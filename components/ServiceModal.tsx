"use client";

import Image from "next/image";
import { useEffect } from "react";

export type ServiceDetail = {
  key: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  service?: ServiceDetail;
};

export function ServiceModal({ open, onClose, service }: Props) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handler);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handler);
      };
    }
    document.body.style.overflow = "";
  }, [open, onClose]);

  if (!open || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-2xl shadow-cyan-500/20 animate-fade-in"
      >
        <div className="grid gap-0 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative h-full bg-gradient-to-br from-white/5 via-black/50 to-white/5">
            <Image
              src={service.image}
              alt={service.title}
              width={1400}
              height={900}
              className="h-full w-full object-cover opacity-95"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
          <div className="grid gap-4 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Service</p>
                <p className="text-2xl font-semibold text-white">{service.title}</p>
                <p className="text-sm text-cyan-200">{service.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-white"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-slate-200">{service.description}</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  window.location.href = "/contact";
                }}
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
              >
                Request Demo
              </button>
              <p className="text-xs text-slate-500">Swap /public/service-previews/* with real screenshots any time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
