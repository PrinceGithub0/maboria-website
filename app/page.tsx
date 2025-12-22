"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "@/components/I18nProvider";

const homeContent = {
  en: {
    hero: {
      eyebrow: "Enterprise IT Partner",
      title: "Empowering your business with intelligent IT solutions.",
      subtitle:
        "SQL, BI, CRM, cloud, and automation services delivered with accountability, observability, and measurable outcomes.",
      primary: "Get Started",
      secondary: "Contact Us",
      bullets: [
        "Unified data, analytics, CRM, and cloud execution in one partner.",
        "Delivery measured by uptime, adoption, and ROI - not just tickets closed.",
      ],
    },
    logosLabel: "Trusted by modern teams",
    trust: {
      coverageEyebrow: "Coverage",
      coverageHeading: "Data | Cloud | CRM | Automation",
      coverageBody: "SQL and BI foundations, customer automation, and cloud resiliency.",
      engagementEyebrow: "Engagement",
      engagementHeading: "Embedded squads",
      engagementBody: "Weekly KPIs, executive-ready reporting, transparent delivery.",
      assuranceEyebrow: "Assurance",
      assuranceHeading: "Security by design",
      assuranceBody: "Identity, access, and auditability baked into every project.",
    },
    servicesPreview: {
      eyebrow: "Enterprise capabilities",
      heading: "Why businesses choose Maboria",
      subheading: "Robust data foundations, actionable insights, and automated customer journeys.",
      button: "View Services",
    },
    highlights: [
      { title: "Outcome-first delivery", description: "Roadmaps with milestones, adoption targets, and measurable KPIs." },
      { title: "Security by design", description: "Identity, access, and data protection woven into every engagement." },
      { title: "Executive visibility", description: "Dashboards, audits, and governance packs for stakeholders." },
    ],
    solutionsBlock: {
      eyebrow: "Solutions",
      heading: "Designed for scale and governance",
      description: "Pick a starting point - every path includes delivery, observability, and enablement.",
      cta: "Explore services",
    },
    solutions: [
      { title: "Data Reliability", desc: "Automated backups, migrations, and drift detection for SQL fleets.", link: "/services" },
      { title: "BI & Analytics", desc: "Executive-ready dashboards, KPI layers, and governed metrics.", link: "/services" },
      { title: "CRM & RevOps", desc: "Pipeline design, playbooks, and automation for revenue teams.", link: "/services" },
      { title: "Cloud Foundations", desc: "Landing zones, identity, guardrails, and zero-downtime rollouts.", link: "/services" },
      { title: "Automation Fabric", desc: "Event-driven workflows, integrations, and SLA-backed queues.", link: "/services" },
      { title: "Observability", desc: "Unified logs, traces, metrics, and alerting mapped to SLOs.", link: "/services" },
    ],
    ctaPanel: {
      eyebrow: "Delivery excellence",
      heading: "Ready for a tailored roadmap?",
      body: "Opinionated standards for data models, CI/CD, observability, and change management so every release is auditable and safe.",
      process: "Discovery > Architecture > Delivery > Enablement",
      assurance: "Runbooks, SLOs, observability, and quarterly reviews",
      button: "Talk to our experts",
    },
    delivery: {
      eyebrow: "Delivery playbook",
      heading: "How we ship reliable systems",
      body:
        "Opinionated standards for data models, CI/CD, observability, and change management so every release is auditable and safe.",
      pillars: [
        { title: "Blueprints", desc: "Architecture, data contracts, and threat models you can audit." },
        { title: "Paved paths", desc: "IaC, CI/CD, and PR templates to reduce drift and speed delivery." },
        { title: "Runbooks", desc: "Incident, rollback, and handover guides to keep teams confident." },
        { title: "Telemetry", desc: "Dashboards, alerts, and SLOs wired in from day one." },
      ],
    },
    caseStudies: {
      eyebrow: "Impact",
      heading: "Outcomes we deliver",
      body: "Measured by uptime, adoption, ROI, and shipping velocity.",
      items: [
        { title: "Global Retail", result: "Reduced incident time by 63%", detail: "Implemented observability, rollback playbooks, and SLOs for 120+ services." },
        { title: "Fintech Platform", result: "Cut reporting latency 5x", detail: "Delivered semantic layer, governed KPIs, and CFO-ready analytics packs." },
        { title: "B2B SaaS", result: "Lifted CRM conversion 18%", detail: "Revamped pipeline automations, routing, and lifecycle playbooks." },
      ],
    },
    dashboards: {
      eyebrow: "Dashboards",
      heading: "Operate and govern in one place",
      body: "Authenticated spaces to manage tickets, service requests, users, and delivery status with role-based access.",
      cards: [
        { title: "Client dashboard", desc: "Create and track tickets, service requests, and profile data.", href: "/dashboard", cta: "Open dashboard" },
        { title: "Admin dashboard", desc: "Full visibility across users, tickets, and service pipelines.", href: "/admin", cta: "Open admin" },
        { title: "Secure access", desc: "JWT auth, rate limiting, and validation on every endpoint.", href: "/login", cta: "Login" },
      ],
    },
  },
  de: {
    hero: {
      eyebrow: "Ihr IT-Partner",
      title: "Intelligente IT-Loesungen, die Ihr Unternehmen voranbringen.",
      subtitle:
        "SQL-, BI-, CRM-, Cloud- und Automations-Services mit klarer Verantwortlichkeit, Observability und messbaren Ergebnissen.",
      primary: "Jetzt starten",
      secondary: "Kontakt aufnehmen",
      bullets: [
        "Daten, Analytics, CRM und Cloud aus einer Hand.",
        "Erfolg gemessen an Verfuegbarkeit, Adoption und ROI - nicht nur an Tickets.",
      ],
    },
    logosLabel: "Vertrauenswuerdig bei modernen Teams",
    trust: {
      coverageEyebrow: "Abdeckung",
      coverageHeading: "Daten | Cloud | CRM | Automation",
      coverageBody: "SQL- und BI-Fundamente, Kunden-Automation und Cloud-Resilienz.",
      engagementEyebrow: "Engagement",
      engagementHeading: "Eingebettete Squads",
      engagementBody: "Woechentliche KPIs, Management-taugliches Reporting, transparente Lieferung.",
      assuranceEyebrow: "Absicherung",
      assuranceHeading: "Security by Design",
      assuranceBody: "Identitaet, Berechtigungen und Auditierbarkeit in jedem Projekt.",
    },
    servicesPreview: {
      eyebrow: "Enterprise-Faehigkeiten",
      heading: "Warum Unternehmen Maboria waehlen",
      subheading: "Stabile Datenbasen, klare Insights und automatisierte Kundenprozesse.",
      button: "Leistungen ansehen",
    },
    highlights: [
      { title: "Outcome-getriebene Lieferung", description: "Roadmaps mit Meilensteinen, Adoption-Zielen und messbaren KPIs." },
      { title: "Security by Design", description: "Identitaeten, Berechtigungen und Datenschutz sind integriert." },
      {
        title: "Transparenz fuer Entscheider",
        description: "Dashboards, Audits und Governance-Pakete fuer Management und Aufsicht.",
      },
    ],
    solutionsBlock: {
      eyebrow: "Loesungen",
      heading: "Auf Skalierung und Governance ausgelegt",
      description: "Waehlen Sie Ihren Startpunkt - jede Route enthaelt Delivery, Observability und Enablement.",
      cta: "Leistungen erkunden",
    },
    solutions: [
      { title: "Data Reliability", desc: "Automatische Backups, Migrationen und Drift-Erkennung fuer SQL-Landschaften.", link: "/services" },
      { title: "BI & Analytics", desc: "Executive-taugliche Dashboards, KPI-Layer und governte Metriken.", link: "/services" },
      { title: "CRM & RevOps", desc: "Pipeline-Design, Playbooks und Automation fuer Revenue-Teams.", link: "/services" },
      { title: "Cloud Foundations", desc: "Landing Zones, Identity, Guardrails und Deployments ohne Ausfall.", link: "/services" },
      { title: "Automation Fabric", desc: "Event-getriebene Workflows, Integrationen und SLA-gestuetzte Queues.", link: "/services" },
      { title: "Observability", desc: "Zentrale Logs, Traces, Metriken und Alerting mit SLO-Bezug.", link: "/services" },
    ],
    ctaPanel: {
      eyebrow: "Lieferqualitaet",
      heading: "Bereit fuer einen massgeschneiderten Fahrplan?",
      body: "Standards fuer Datenmodelle, CI/CD, Observability und Change-Management, damit jede Auslieferung auditierbar und sicher bleibt.",
      process: "Discovery > Architektur > Delivery > Enablement",
      assurance: "Runbooks, SLOs, Observability und quartalsweise Reviews",
      button: "Mit Expertinnen und Experten sprechen",
    },
    delivery: {
      eyebrow: "Delivery Playbook",
      heading: "Wie wir zuverlaessige Systeme liefern",
      body:
        "Standards fuer Datenmodelle, CI/CD, Observability und Change-Management, damit jede Auslieferung auditierbar und sicher bleibt.",
      pillars: [
        { title: "Blueprints", desc: "Architektur, Datenvertraege und Threat-Models, die auditierbar sind." },
        { title: "Paved Paths", desc: "IaC, CI/CD und PR-Templates, um Drift zu reduzieren und Tempo zu erhoehen." },
        { title: "Runbooks", desc: "Incident-, Rollback- und Uebergabe-Guides fuer zuversichtliche Teams." },
        { title: "Telemetry", desc: "Dashboards, Alerts und SLOs von Tag eins an." },
      ],
    },
    caseStudies: {
      eyebrow: "Impact",
      heading: "Ergebnisse, die wir liefern",
      body: "Gemessen an Uptime, Adoption, ROI und Liefergeschwindigkeit.",
      items: [
        {
          title: "Globaler Handel",
          result: "Incident-Zeit um 63% reduziert",
          detail: "Observability, Rollback-Playbooks und SLOs fuer 120+ Services eingefuehrt.",
        },
        {
          title: "Fintech-Plattform",
          result: "Reporting-Latenz 5x reduziert",
          detail: "Semantische Schicht, governte KPIs und CFO-taugliche Analytics-Pakete geliefert.",
        },
        {
          title: "B2B SaaS",
          result: "CRM-Conversion um 18% erhoeht",
          detail: "Pipeline-Automation, Routing und Lifecycle-Playbooks erneuert.",
        },
      ],
    },
    dashboards: {
      eyebrow: "Dashboards",
      heading: "Betrieb und Governance an einem Ort",
      body: "Authentifizierte Bereiche fuer Tickets, Service Requests, Nutzer und Lieferstatus mit rollenbasierter Steuerung.",
      cards: [
        { title: "Client-Dashboard", desc: "Tickets, Service Requests und Profildaten erstellen und verfolgen.", href: "/dashboard", cta: "Dashboard oeffnen" },
        { title: "Admin-Dashboard", desc: "Vollstaendige Sicht auf Nutzer, Tickets und Service-Pipelines.", href: "/admin", cta: "Admin oeffnen" },
        { title: "Gesicherter Zugriff", desc: "JWT-Auth, Rate-Limiting und Validierung auf jedem Endpoint.", href: "/login", cta: "Login" },
      ],
    },
  },
} as const;

const logos = ["Artemis", "Northwind", "BlueSky", "Helios", "Vertex", "NovaOps"];

export default function HomePage() {
  const { lang } = useI18n();
  const copy = homeContent[lang];

  return (
    <div className="relative space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-14 shadow-2xl md:px-12 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,0.12),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0" />

        <div className="relative grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.hero.eyebrow}</p>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">{copy.hero.title}</h1>
            <p className="max-w-2xl text-lg text-slate-200 md:text-xl">{copy.hero.subtitle}</p>
            <div className="grid gap-2 text-sm text-slate-300 md:text-base">
              {copy.hero.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500/20 text-[10px] text-cyan-200">
                    &gt;
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
                {copy.hero.primary}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-200"
              >
                {copy.hero.secondary}
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

      {/* Logos */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl md:p-8">
        <p className="text-center text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.logosLabel}</p>
        <div className="mt-4 grid grid-cols-2 gap-3 text-center text-sm font-semibold text-slate-200 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((name) => (
            <div key={name} className="rounded-xl border border-white/5 bg-black/20 px-3 py-2 shadow-inner shadow-black/20">
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Trust / metrics */}
      <section className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 shadow-xl md:grid-cols-3 md:p-8">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.trust.coverageEyebrow}</p>
          <p className="text-xl font-semibold text-white">{copy.trust.coverageHeading}</p>
          <p>{copy.trust.coverageBody}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.trust.engagementEyebrow}</p>
          <p className="text-xl font-semibold text-white">{copy.trust.engagementHeading}</p>
          <p>{copy.trust.engagementBody}</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.trust.assuranceEyebrow}</p>
          <p className="text-xl font-semibold text-white">{copy.trust.assuranceHeading}</p>
          <p>{copy.trust.assuranceBody}</p>
        </div>
      </section>

      {/* Services preview */}
      <section className="space-y-6">
        <div className="flex flex-col gap-3 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.servicesPreview.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.servicesPreview.heading}</h2>
            <p className="text-slate-300 md:text-lg">{copy.servicesPreview.subheading}</p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 hover:border-cyan-300 hover:text-cyan-100"
          >
            {copy.servicesPreview.button}
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {copy.highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.title}</p>
              <p className="mt-2 text-base text-slate-200">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions grid */}
      <section className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.solutionsBlock.eyebrow}</p>
            <h3 className="text-3xl font-semibold text-white md:text-4xl">{copy.solutionsBlock.heading}</h3>
            <p className="text-slate-300 md:text-lg">{copy.solutionsBlock.description}</p>
          </div>
          <Link href="/services" className="text-sm font-semibold text-cyan-200 hover:text-cyan-100">
            {copy.solutionsBlock.cta} &gt;
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {copy.solutions.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/10 bg-black/30 p-5 shadow-lg transition hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-500/20"
            >
              <p className="text-lg font-semibold text-white">{s.title}</p>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              <Link href={s.link} className="mt-3 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100">
                {copy.solutionsBlock.cta} &gt;
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + imagery */}
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-white/5 p-8 shadow-xl md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.ctaPanel.eyebrow}</p>
          <h3 className="text-3xl font-semibold text-white md:text-4xl">{copy.ctaPanel.heading}</h3>
          <p className="text-base text-slate-200 md:text-lg">{copy.ctaPanel.body}</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            {copy.ctaPanel.button}
          </Link>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Process</p>
              <p className="mt-2 text-sm text-slate-200">{copy.ctaPanel.process}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Assurance</p>
              <p className="mt-2 text-sm text-slate-200">{copy.ctaPanel.assurance}</p>
            </div>
          </div>
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

      {/* Delivery playbook */}
      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.delivery.eyebrow}</p>
          <h3 className="text-3xl font-semibold text-white md:text-4xl">{copy.delivery.heading}</h3>
          <p className="max-w-3xl text-slate-300">{copy.delivery.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {copy.delivery.pillars.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.caseStudies.eyebrow}</p>
          <h3 className="text-3xl font-semibold text-white md:text-4xl">{copy.caseStudies.heading}</h3>
          <p className="text-slate-300 md:text-lg">{copy.caseStudies.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {copy.caseStudies.items.map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{c.title}</p>
              <p className="mt-2 text-xl font-semibold text-white">{c.result}</p>
              <p className="mt-2 text-sm text-slate-300">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboards */}
      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.dashboards.eyebrow}</p>
          <h3 className="text-3xl font-semibold text-white md:text-4xl">{copy.dashboards.heading}</h3>
          <p className="text-slate-300 md:text-lg">{copy.dashboards.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {copy.dashboards.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg">
              <p className="text-sm font-semibold text-white">{card.title}</p>
              <p className="mt-2 text-sm text-slate-300">{card.desc}</p>
              <Link href={card.href} className="mt-3 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100">
                {card.cta} &gt;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
