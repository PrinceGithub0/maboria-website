"use client";

import Image from "next/image";
import { useState } from "react";
import { useI18n } from "@/components/I18nProvider";
import { ServiceModal, type ServiceDetail } from "@/components/ServiceModal";

type ServiceEntry = {
  key: string;
  title: string;
  blurb: string;
  modal: ServiceDetail;
};

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

const serviceContent: Record<
  "en" | "de",
  {
    title: string;
    lead: string;
    subheading: string;
    services: ServiceEntry[];
    sidePanel: { eyebrow: string; heading: string; badge: string; blurb: string; alt: string };
    engagement: { eyebrow: string; heading: string; body: string; steps: { title: string; desc: string }[] };
    support: { eyebrow: string; heading: string; body: string; tiers: { name: string; sla: string; response: string; desc: string }[] };
  }
> = {
  en: {
    title: "Services",
    lead: "Built to deliver reliable, observable, and scalable platforms.",
    subheading: "We design, build, and operate data, BI, CRM, and cloud platforms with accountable outcomes.",
    services: [
      {
        key: "sql",
        title: "SQL & Data Management",
        blurb: "Architecture, performance, migrations, backups, and governance.",
        modal: {
          key: "sql",
          title: "SQL & Data Management",
          subtitle: "Performance, reliability, and governance for mission-critical data.",
          description:
            "Architecture, performance tuning, migrations, backups, and governance with auditable change control for every environment.",
          image: "/service-previews/sql.svg",
        },
      },
      {
        key: "bi",
        title: "Business Intelligence",
        blurb: "Dashboards, reporting layers, KPI models, and executive-ready analytics.",
        modal: {
          key: "bi",
          title: "Business Intelligence",
          subtitle: "Executive-ready analytics and governed metrics.",
          description:
            "Dashboards, reporting layers, KPI models, and semantic consistency that keep finance, product, and ops aligned.",
          image: "/service-previews/bi.svg",
        },
      },
      {
        key: "crm",
        title: "CRM & Automation",
        blurb: "CRM setup, pipeline design, playbooks, and workflow automation.",
        modal: {
          key: "crm",
          title: "CRM & Automation",
          subtitle: "Revenue-grade pipelines and lifecycle automation.",
          description:
            "CRM setup, playbooks, routing, and workflow automation to drive adoption, faster cycle times, and conversion lift.",
          image: "/service-previews/crm.svg",
        },
      },
      {
        key: "cloud",
        title: "Cloud & Platform",
        blurb: "Landing zones, monitoring, cost controls, and zero-downtime rollouts.",
        modal: {
          key: "cloud",
          title: "Cloud & Platform",
          subtitle: "Landing zones, guardrails, and zero-downtime delivery.",
          description:
            "Identity, cost controls, monitoring, and resilient deployments for secure, compliant platforms across regions.",
          image: "/service-previews/cloud.svg",
        },
      },
    ],
    sidePanel: {
      eyebrow: "Delivery",
      heading: "Analytics snapshot",
      badge: "Live",
      blurb: "KPI dashboards, adoption metrics, and automation health for your stakeholders.",
      alt: "IT professional managing server hub",
    },
    engagement: {
      eyebrow: "Engagement model",
      heading: "From discovery to steady-state",
      body: "Structured phases with measurable checkpoints.",
      steps: [
        { title: "Discovery", desc: "Current state, risks, goals, and KPI alignment." },
        { title: "Blueprint", desc: "Architecture, security model, and delivery plan." },
        { title: "Build & Launch", desc: "Iterative releases with observability and rollbacks." },
        { title: "Operate", desc: "SLOs, runbooks, and quarterly improvements." },
      ],
    },
    support: {
      eyebrow: "Support",
      heading: "SLA tiers",
      body: "Choose coverage that matches your criticality and hours.",
      tiers: [
        { name: "Essential", sla: "8x5", response: "< 4h", desc: "Core support, planned releases, monthly reviews." },
        { name: "Standard", sla: "12x5", response: "< 2h", desc: "Operational coverage, weekly KPIs, incident runbooks." },
        { name: "Mission Critical", sla: "24x7", response: "< 30m", desc: "Always-on, executive comms, post-incident reports." },
      ],
    },
  },
  de: {
    title: "Leistungen",
    lead: "Entwickelt fuer zuverlaessige, beobachtbare und skalierbare Plattformen.",
    subheading: "Wir entwerfen, bauen und betreiben Daten-, BI-, CRM- und Cloud-Plattformen mit klarer Verantwortung.",
    services: [
      {
        key: "sql",
        title: "SQL & Datenmanagement",
        blurb: "Architektur, Performance, Migrationen, Backups und Governance.",
        modal: {
          key: "sql",
          title: "SQL & Datenmanagement",
          subtitle: "Performance, Zuverlaessigkeit und Governance fuer kritische Daten.",
          description:
            "Architektur, Performance-Tuning, Migrationen, Backups und Governance mit nachvollziehbarer Aenderungskontrolle in jeder Umgebung.",
          image: "/service-previews/sql.svg",
        },
      },
      {
        key: "bi",
        title: "Business Intelligence",
        blurb: "Dashboards, Reporting-Layer, KPI-Modelle und Analytics fuer Entscheider.",
        modal: {
          key: "bi",
          title: "Business Intelligence",
          subtitle: "Management-taugliche Analytics und gesteuerte KPIs.",
          description:
            "Dashboards, Reporting-Layer, KPI-Modelle und semantische Konsistenz, die Finance, Product und Ops ausrichten.",
          image: "/service-previews/bi.svg",
        },
      },
      {
        key: "crm",
        title: "CRM & Automation",
        blurb: "CRM-Einrichtung, Pipeline-Design, Playbooks und Workflow-Automation.",
        modal: {
          key: "crm",
          title: "CRM & Automation",
          subtitle: "Revenue-fertige Pipelines und Lifecycle-Automation.",
          description:
            "CRM-Setup, Playbooks, Routing und Workflow-Automation fuer Adoption, kuerzere Zyklen und Conversion-Steigerung.",
          image: "/service-previews/crm.svg",
        },
      },
      {
        key: "cloud",
        title: "Cloud & Plattform",
        blurb: "Landing Zones, Monitoring, Kostenkontrolle und Deployments ohne Ausfall.",
        modal: {
          key: "cloud",
          title: "Cloud & Plattform",
          subtitle: "Landing Zones, Guardrails und Zero-Downtime-Delivery.",
          description:
            "Identity, Kostenkontrolle, Monitoring und resiliente Deployments fuer sichere, konforme Plattformen ueber Regionen hinweg.",
          image: "/service-previews/cloud.svg",
        },
      },
    ],
    sidePanel: {
      eyebrow: "Lieferung",
      heading: "Analytics-Uebersicht",
      badge: "Live",
      blurb: "KPI-Dashboards, Adoption-Kennzahlen und Automation-Health fuer Ihre Stakeholder.",
      alt: "IT-Professional verwaltet Server",
    },
    engagement: {
      eyebrow: "Engagement-Modell",
      heading: "Vom Discovery bis zum Betrieb",
      body: "Strukturierte Phasen mit messbaren Checkpoints.",
      steps: [
        { title: "Discovery", desc: "Ist-Zustand, Risiken, Ziele und KPI-Abgleich." },
        { title: "Blueprint", desc: "Architektur, Sicherheitsmodell und Delivery-Plan." },
        { title: "Build & Launch", desc: "Iterative Releases mit Observability und Rollbacks." },
        { title: "Betrieb", desc: "SLOs, Runbooks und quartalsweise Verbesserungen." },
      ],
    },
    support: {
      eyebrow: "Support",
      heading: "SLA-Stufen",
      body: "Waehlen Sie die Abdeckung, die zu Ihrer Kritikalitaet und Arbeitszeiten passt.",
      tiers: [
        { name: "Essential", sla: "8x5", response: "< 4h", desc: "Kernsupport, geplante Releases, monatliche Reviews." },
        { name: "Standard", sla: "12x5", response: "< 2h", desc: "Operative Abdeckung, woechentliche KPIs, Incident-Runbooks." },
        { name: "Mission Critical", sla: "24x7", response: "< 30m", desc: "Always-on, Executive-Kommunikation, Post-Incident-Reports." },
      ],
    },
  },
};

export default function ServicesPage() {
  const { lang } = useI18n();
  const copy = serviceContent[lang];
  const [selected, setSelected] = useState<ServiceDetail | null>(null);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 shadow-2xl md:px-12">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.title}</p>
        <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">{copy.lead}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-200">{copy.subheading}</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 md:grid-cols-2">
          {copy.services.map((service, idx) => (
            <div
              key={service.key}
              onClick={() => setSelected(service.modal)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-500/20"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300 ring-1 ring-cyan-400/30">
                {serviceIcons[idx % serviceIcons.length]()}
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.blurb}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-cyan-200">
                {lang === "de" ? "Zum Anzeigen klicken" : "Click to preview"}
              </p>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/30 to-white/5 p-6 shadow-xl">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(56,189,248,0.12),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(167,139,250,0.14),transparent_32%)]" />
          <div className="relative space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{copy.sidePanel.eyebrow}</p>
                <p className="text-lg font-semibold text-white">{copy.sidePanel.heading}</p>
              </div>
              <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-semibold text-green-200">
                {copy.sidePanel.badge}
              </span>
            </div>
            <Image
              src="/images/close-up-server-hub-it-professional-debugging-optimizing-code.jpg"
              alt={copy.sidePanel.alt}
              width={1200}
              height={800}
              className="h-auto w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-cyan-500/20"
            />
            <p className="text-sm text-slate-300">{copy.sidePanel.blurb}</p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.engagement.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.engagement.heading}</h2>
            <p className="text-slate-300 md:text-lg">{copy.engagement.body}</p>
          </div>
          <p className="text-sm text-slate-300">
            {lang === "de" ? "SLA-gestuetzt, mit Runbooks und Uebergabe." : "SLA-backed, with runbooks and handover."}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {copy.engagement.steps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">{step.title}</p>
              <p className="mt-2 text-sm text-slate-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.support.eyebrow}</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.support.heading}</h2>
          <p className="text-slate-300 md:text-lg">{copy.support.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {copy.support.tiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg">
              <p className="text-lg font-semibold text-white">{tier.name}</p>
              <p className="mt-1 text-sm text-cyan-200">
                SLA: {tier.sla} - {lang === "de" ? "Antwort" : "Response"}: {tier.response}
              </p>
              <p className="mt-2 text-sm text-slate-300">{tier.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ServiceModal open={!!selected} onClose={() => setSelected(null)} service={selected ?? undefined} lang={lang} />
    </div>
  );
}
