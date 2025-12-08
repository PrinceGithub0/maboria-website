"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{t.aboutPage.title}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{t.aboutPage.mission}</h1>
          <p className="text-base text-slate-200 md:text-lg">{t.aboutPage.story}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {t.aboutPage.values.map((value: { title: string; description: string }) => (
              <div key={value.title} className="rounded-2xl bg-black/40 p-4 border border-white/10">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{value.title}</p>
                <p className="mt-2 text-sm text-slate-200">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 shadow-lg shadow-cyan-500/10">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Founder</p>
            <p className="mt-2 text-lg font-semibold text-white">Collins Eromosele</p>
            <p className="mt-2 text-sm text-slate-300">
              Collins brings a hands-on background in data engineering, cloud reliability, and automation-first delivery. He
              founded Maboria to make enterprise technology clearer, faster, and accountable—with roadmaps that translate
              strategy into measurable impact.
            </p>
            <p className="mt-2 text-sm text-slate-400">
              He leads engagements directly, embedding with client teams to design resilient architectures, streamline
              operations, and mentor engineers for long-term success.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-500/10" />
          <Image
            src="/images/data-center-technician-using-artificial-intelligence-tablet-close-up.jpg"
            alt="Engineer collaborating with AI tools in a data center"
            width={1200}
            height={900}
            className="h-full w-full rounded-3xl object-cover object-center opacity-95 shadow-2xl shadow-cyan-500/20"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{t.aboutPage.title}</p>
            <p className="text-sm text-slate-200">Hybrid delivery across data, cloud, and CRM.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
