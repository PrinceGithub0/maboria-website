"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

const serviceIcons = [
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
      <ellipse cx="12" cy="5" rx="7" ry="3" strokeWidth="1.5" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" strokeWidth="1.5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" strokeWidth="1.5" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
      <path d="M5 12v6" strokeWidth="1.5" />
      <path d="M10 8v10" strokeWidth="1.5" />
      <path d="M15 4v14" strokeWidth="1.5" />
      <path d="M20 10v8" strokeWidth="1.5" />
      <path d="M4 20h16" strokeWidth="1.5" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
      <circle cx="8" cy="8" r="3" strokeWidth="1.5" />
      <circle cx="16" cy="16" r="3" strokeWidth="1.5" />
      <path d="M11 9l2 2" strokeWidth="1.5" />
      <path d="M9 16h2.5" strokeWidth="1.5" />
      <path d="M13 8h2.5" strokeWidth="1.5" />
    </svg>
  ),
  () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
      <path d="M7.5 18h8.5a4 4 0 0 0 .5-7.96 5 5 0 0 0-9.6-1.9A3.5 3.5 0 0 0 7.5 18Z" strokeWidth="1.5" />
    </svg>
  ),
];

export default function ServicesPage() {
  const { t } = useI18n();
  const cards = t.servicesPage.cards;

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 shadow-2xl md:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{t.servicesPage.title}</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{t.servicesPage.lead}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-200">
          {t.home.hero.subtitle}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card: { title: string; description: string }, idx: number) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-500/20"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30">
                {serviceIcons[idx % serviceIcons.length]()}
              </div>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{card.description}</p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/30 to-white/5 p-6 shadow-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(56,189,248,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.14),transparent_32%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Delivery</p>
                <p className="text-lg font-semibold text-white">Analytics Snapshot</p>
              </div>
              <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-semibold text-green-200">Live</span>
            </div>
            <Image
              src="/images/close-up-server-hub-it-professional-debugging-optimizing-code.jpg"
              alt="IT professional managing server hub"
              width={1200}
              height={800}
              className="h-auto w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-cyan-500/20"
            />
            <p className="text-sm text-slate-300">
              KPI dashboards, adoption metrics, and automation health for your stakeholders.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Engagement model</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">From discovery to steady-state</h2>
            <p className="text-slate-300 md:text-lg">Structured phases with measurable checkpoints.</p>
          </div>
          <p className="text-sm text-slate-300">SLA-backed, with runbooks and handover.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { title: "Discovery", desc: "Current state, risks, goals, and KPI alignment." },
            { title: "Blueprint", desc: "Architecture, security model, and delivery plan." },
            { title: "Build & Launch", desc: "Iterative releases with observability and rollbacks." },
            { title: "Operate", desc: "SLOs, runbooks, and quarterly improvements." },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">{step.title}</p>
              <p className="mt-2 text-sm text-slate-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Support</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">SLA tiers</h2>
          <p className="text-slate-300 md:text-lg">Choose coverage that matches your criticality and hours.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Essential", sla: "8x5", response: "< 4h", desc: "Core support, planned releases, monthly reviews." },
            { name: "Standard", sla: "12x5", response: "< 2h", desc: "Operational coverage, weekly KPIs, incident runbooks." },
            { name: "Mission Critical", sla: "24x7", response: "< 30m", desc: "Always-on, executive comms, post-incident reports." },
          ].map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg">
              <p className="text-lg font-semibold text-white">{tier.name}</p>
              <p className="mt-1 text-sm text-cyan-200">
                SLA: {tier.sla} · Response: {tier.response}
              </p>
              <p className="mt-2 text-sm text-slate-300">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
