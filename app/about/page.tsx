"use client";

import Image from "next/image";
import { useI18n } from "@/components/I18nProvider";

const aboutContent = {
  en: {
    eyebrow: "About Maboria",
    mission: "We design systems that stay available, intelligible, and adaptable - so your teams ship faster with confidence.",
    story:
      "Senior architects, data engineers, CRM specialists, and cloud reliability leads working as one unit to deliver clarity, safety, and measurable results.",
    values: [
      { title: "Reliability", description: "Measured service levels, disaster readiness, and disciplined change management." },
      { title: "Clarity", description: "Transparent architecture, clean documentation, and clear decision logs." },
      { title: "Innovation", description: "Modern data stacks, automation-first delivery, and cloud-native patterns." },
      { title: "Partnership", description: "Embedded squads focused on outcomes, enablement, and knowledge transfer." },
    ],
    founder: {
      title: "Founder",
      name: "Collins Eromosele",
      intro:
        "Collins brings a hands-on background in data engineering, cloud reliability, and automation-first delivery. He founded Maboria to make enterprise technology clearer, faster, and accountable - with roadmaps that translate strategy into measurable impact.",
      note:
        "He leads engagements directly, embedding with client teams to design resilient architectures, streamline operations, and mentor engineers for long-term success.",
    },
    leadership: {
      eyebrow: "Leadership",
      heading: "Guided by builders and operators",
      body: "Hands-on leaders across data, cloud, automation, and security.",
      note: "Available for executive steering and architecture reviews.",
      people: [
        { name: "Collins Eromosele", role: "Founder | Delivery", focus: "Data reliability, automation-first delivery, and SLO design." },
        { name: "A. Morgan", role: "Cloud & Security", focus: "Landing zones, identity, and compliant multi-region rollouts." },
        { name: "J. Patel", role: "RevOps & CRM", focus: "Pipeline design, lifecycle automation, and adoption metrics." },
      ],
    },
    global: {
      eyebrow: "Global delivery",
      heading: "Follow-the-sun coverage",
      body: "Distributed teams for continuity, velocity, and rapid response.",
      regions: [
        { title: "Europe", desc: "Frankfurt | London | Remote" },
        { title: "North America", desc: "New York | Remote" },
        { title: "Cloud Regions", desc: "Multi-region architectures with compliance guardrails." },
        { title: "Engagement", desc: "On-site sprints or fully remote embedded squads." },
      ],
    },
    why: {
      eyebrow: "Why Maboria",
      heading: "Clarity, safety, and execution",
      body: "We combine architecture discipline with measurable delivery.",
      items: [
        { title: "Auditability", desc: "Runbooks, change logs, and decision records for every release." },
        { title: "Security by design", desc: "Identity, access, and data protection embedded in blueprints." },
        { title: "Enablement", desc: "We leave teams with playbooks, dashboards, and training." },
      ],
    },
    imageAlt: "Engineer collaborating with advanced tools in a data center",
    imageTagline: "Hybrid delivery across data, cloud, and CRM.",
  },
  de: {
    eyebrow: "Ueber Maboria",
    mission:
      "Wir bauen Systeme, die verfuegbar, verstaendlich und anpassungsfaehig bleiben - damit Ihre Teams schneller und sicherer liefern.",
    story:
      "Senior-Architekten, Data Engineers, CRM-Spezialisten und Cloud-Reliability-Leads arbeiten als ein Team, um Klarheit, Sicherheit und messbare Ergebnisse zu liefern.",
    values: [
      { title: "Zuverlaessigkeit", description: "Messbare SLAs, Desaster-Vorsorge und disziplinierter Change-Prozess." },
      { title: "Klarheit", description: "Transparente Architektur, saubere Dokumentation und nachvollziehbare Entscheidungen." },
      { title: "Innovation", description: "Moderne Daten-Stacks, Automation-first und cloud-native Patterns." },
      { title: "Partnerschaft", description: "Eingebettete Teams mit Fokus auf Ergebnisse, Enablement und Wissenstransfer." },
    ],
    founder: {
      title: "Gruender",
      name: "Collins Eromosele",
      intro:
        "Collins verknuepft Data Engineering, Cloud-Resilienz und Automation-first Delivery. Er gruendete Maboria, um Enterprise-Technologie klarer, schneller und verantwortlicher zu machen - mit Fahrplaenen, die Strategie in messbaren Impact uebersetzen.",
      note:
        "Er fuehrt Projekte selbst, arbeitet in Kundenteams mit, entwirft resiliente Architekturen, verschlankt Betrieb und coacht Engineers fuer nachhaltigen Erfolg.",
    },
    leadership: {
      eyebrow: "Leadership",
      heading: "Gefuehrt von Buildern und Operatoren",
      body: "Hands-on Leader fuer Daten, Cloud, Automation und Security.",
      note: "Verfuegbar fuer Executive Steering und Architektur-Reviews.",
      people: [
        { name: "Collins Eromosele", role: "Gruender | Delivery", focus: "Data Reliability, Automation-first Delivery und SLO-Design." },
        { name: "A. Morgan", role: "Cloud & Security", focus: "Landing Zones, Identity und compliant Multi-Region-Rollouts." },
        { name: "J. Patel", role: "RevOps & CRM", focus: "Pipeline-Design, Lifecycle-Automation und Adoption-Metriken." },
      ],
    },
    global: {
      eyebrow: "Globale Lieferung",
      heading: "Follow-the-sun Abdeckung",
      body: "Verteilte Teams fuer Kontinuitaet, Tempo und schnelle Reaktion.",
      regions: [
        { title: "Europa", desc: "Frankfurt | London | Remote" },
        { title: "Nordamerika", desc: "New York | Remote" },
        { title: "Cloud-Regionen", desc: "Multi-Region-Architekturen mit Compliance-Guardrails." },
        { title: "Engagement", desc: "On-site Sprints oder voll remote eingebettete Squads." },
      ],
    },
    why: {
      eyebrow: "Warum Maboria",
      heading: "Klarheit, Sicherheit und Umsetzung",
      body: "Wir verbinden Architektur-Disziplin mit messbarer Delivery.",
      items: [
        { title: "Auditierbarkeit", desc: "Runbooks, Change-Logs und Decision Records fuer jede Auslieferung." },
        { title: "Security by Design", desc: "Identity, Access und Datenschutz in jedem Blueprint." },
        { title: "Enablement", desc: "Wir hinterlassen Playbooks, Dashboards und Training." },
      ],
    },
    imageAlt: "Engineer arbeitet mit modernen Tools im Rechenzentrum",
    imageTagline: "Hybride Lieferung fuer Daten, Cloud und CRM.",
  },
} as const;

export default function AboutPage() {
  const { lang } = useI18n();
  const copy = aboutContent[lang];

  return (
    <div className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.eyebrow}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{copy.mission}</h1>
          <p className="text-base text-slate-200 md:text-lg">{copy.story}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {copy.values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{value.title}</p>
                <p className="mt-2 text-sm text-slate-200">{value.description}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-4 shadow-lg shadow-cyan-500/10">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{copy.founder.title}</p>
            <p className="mt-2 text-lg font-semibold text-white">{copy.founder.name}</p>
            <p className="mt-2 text-sm text-slate-300">{copy.founder.intro}</p>
            <p className="mt-2 text-sm text-slate-400">{copy.founder.note}</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-cyan-500/10" />
          <Image
            src="/images/data-center-technician-using-artificial-intelligence-tablet-close-up.jpg"
            alt={copy.imageAlt}
            width={1200}
            height={900}
            className="h-full w-full rounded-3xl object-cover object-center opacity-95 shadow-2xl shadow-cyan-500/20"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{copy.eyebrow}</p>
            <p className="text-sm text-slate-200">{copy.imageTagline}</p>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.leadership.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.leadership.heading}</h2>
            <p className="text-slate-300 md:text-lg">{copy.leadership.body}</p>
          </div>
          <p className="text-sm text-slate-400">{copy.leadership.note}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {copy.leadership.people.map((leader) => (
            <div key={leader.name} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-lg font-semibold text-white">{leader.name}</p>
              <p className="text-sm text-cyan-200">{leader.role}</p>
              <p className="mt-2 text-sm text-slate-300">{leader.focus}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.global.eyebrow}</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.global.heading}</h2>
          <p className="text-slate-300 md:text-lg">{copy.global.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {copy.global.regions.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.why.eyebrow}</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.why.heading}</h2>
          <p className="text-slate-300 md:text-lg">{copy.why.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {copy.why.items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
