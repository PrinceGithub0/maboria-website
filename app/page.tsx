"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <div className="relative space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-14 shadow-2xl md:px-12 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.12),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0" />

        <div className="relative grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{t.home.hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">{t.home.hero.title}</h1>
            <p className="max-w-2xl text-lg text-slate-200 md:text-xl">{t.home.hero.subtitle}</p>
            <div className="grid gap-2 text-sm text-slate-300 md:text-base">
              {t.home.hero.bullets.map((bullet: string) => (
                <div key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] text-cyan-200">
                    ●
                  </span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start gap-4 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
              >
                {t.home.hero.primary}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
              >
                {t.home.hero.secondary}
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative grid w-full max-w-lg gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur">
              <Image
                src="/images/christopher-gower-m_HRfLhgABo-unsplash.jpg"
                alt="Engineer working on laptop with code"
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl border border-white/10 object-cover shadow-2xl shadow-cyan-500/20"
                priority
              />
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 md:text-base">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">Reliability</p>
                  <p className="mt-2 text-lg font-semibold text-white">99.9% SLA</p>
                  <p className="text-xs text-slate-400">Uptime, rollback, observability</p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wider text-slate-400">Delivery</p>
                  <p className="mt-2 text-lg font-semibold text-white">Agile & Measurable</p>
                  <p className="text-xs text-slate-400">KPIs, dashboards, automation</p>
                </div>
              </div>
              <div className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-4 text-sm text-cyan-50">
                Precision-engineered IT services combining database mastery, cloud scalability, and workflow automation.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{t.home.hero.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{t.home.servicesPreview.heading}</h2>
            <p className="text-slate-300 md:text-lg">{t.home.servicesPreview.subheading}</p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 hover:border-cyan-300 hover:text-cyan-100"
          >
            View Services
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {t.home.highlights.items.map((item: { title: string; description: string }) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.title}</p>
              <p className="mt-2 text-base text-slate-200">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-white/5 p-8 shadow-xl md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{t.home.highlights.title}</p>
          <h3 className="text-3xl font-semibold text-white md:text-4xl">{t.home.cta.title}</h3>
          <p className="text-base text-slate-200 md:text-lg">
            {t.home.hero.subtitle}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            {t.home.cta.action}
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-lg">
          <Image
            src="/images/close-up-shot-device-data-center.jpg"
            alt="Modern data center hardware"
            width={1200}
            height={800}
            className="h-full w-full rounded-2xl object-cover shadow-2xl shadow-cyan-500/20"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>
      </section>
    </div>
  );
}
