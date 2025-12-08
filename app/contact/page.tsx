"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-white/5 p-8 shadow-xl md:grid-cols-[1.05fr_0.95fr] md:p-12">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{t.contactPage.title}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{t.contactPage.subtitle}</h1>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.contactPage.info.map((item: { title: string; detail: string }) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.title}</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="grid gap-4 rounded-2xl border border-white/10 bg-black/60 p-6 shadow-lg backdrop-blur">
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="Share your project goals, timeline, or current stack..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            {t.contactPage.cta}
          </button>
        </form>
      </section>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
        <Image
          src="/images/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg"
          alt="Abstract technology workspace"
          width={1200}
          height={800}
          className="h-full w-full rounded-3xl object-cover shadow-2xl shadow-cyan-500/20"
        />
      </section>
    </div>
  );
}
