import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider, type AppContent } from "@/components/I18nProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maboria | Intelligent IT Solutions",
  description: "SQL, BI, CRM, cloud, and automation services for modern enterprises.",
};

const translations: Record<"en" | "de", AppContent> = {
  en: {
    nav: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Signup", href: "/signup" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Admin", href: "/admin" },
      { label: "Login", href: "/login" },
    ],
    footer: { rights: "© 2025 Maboria", tagline: "IT Solutions", privacy: "Privacy", imprint: "Imprint" },
    home: {
      hero: {
        eyebrow: "Enterprise IT Partner",
        title: "Empowering Your Business with Intelligent IT Solutions.",
        subtitle:
          "MABORIA delivers SQL, BI, CRM, cloud, and automation programs designed for teams of every size - with measurable outcomes and accountable delivery.",
        primary: "Get Started",
        secondary: "Contact Us",
        bullets: [
          "Unified data, analytics, CRM, and cloud execution in one partner.",
          "Delivery measured by uptime, adoption, and ROI - not just tickets closed.",
        ],
      },
      servicesPreview: {
        heading: "Enterprise-grade capabilities",
        subheading: "Robust data foundations, actionable insights, and automated customer journeys.",
      },
      highlights: {
        title: "Why businesses choose Maboria",
        items: [
          { title: "Outcome-first delivery", description: "Roadmaps with milestones, adoption targets, and measurable KPIs." },
          { title: "Security by design", description: "Identity, access, and data protection woven into every engagement." },
          { title: "Executive visibility", description: "Dashboards, audits, and governance packs for stakeholders." },
        ],
      },
      cta: { title: "Ready for a tailored roadmap?", action: "Talk to our experts" },
    },
    servicesPage: {
      title: "Services",
      lead: "Built to deliver reliable, observable, and scalable platforms.",
      cards: [
        { title: "SQL & Data Management", description: "Architecture, performance, migration, backup, and governance." },
        { title: "Business Intelligence", description: "Dashboards, reporting layers, KPI models, and executive-ready analytics." },
        { title: "CRM & Automation", description: "CRM setup, pipeline design, playbooks, and workflow automation." },
        { title: "Cloud & Platform", description: "Landing zones, monitoring, cost controls, and zero-downtime rollouts." },
      ],
    },
    aboutPage: {
      title: "About Maboria",
      mission:
        "We design systems that stay available, intelligible, and adaptable - so your teams ship faster with confidence.",
      values: [
        { title: "Reliability", description: "Measured service levels, disaster readiness, and disciplined change management." },
        { title: "Clarity", description: "Transparent architecture, clean documentation, and clear decision logs." },
        { title: "Innovation", description: "Modern data stacks, automation-first delivery, and cloud-native patterns." },
        { title: "Partnership", description: "Embedded squads focused on outcomes, enablement, and knowledge transfer." },
      ],
      story: "Senior architects, data engineers, CRM specialists, and cloud reliability leads working as one unit.",
    },
    contactPage: {
      title: "Let's architect your next move",
      subtitle: "Share your SQL, BI, CRM, cloud, or automation goals. Expect a tailored response within one business day.",
      info: [
        { title: "Email", detail: "contact@maboria.com" },
        { title: "Response", detail: "Within 1 business day" },
        { title: "Engagement", detail: "Remote or on-site" },
      ],
      cta: "Send Message",
    },
  },
  de: {
    nav: [
      { label: "Start", href: "/" },
      { label: "Leistungen", href: "/services" },
      { label: "Ueber uns", href: "/about" },
      { label: "Kontakt", href: "/contact" },
      { label: "Registrieren", href: "/signup" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Admin", href: "/admin" },
      { label: "Login", href: "/login" },
    ],
    footer: { rights: "© 2025 Maboria", tagline: "IT Solutions", privacy: "Datenschutz", imprint: "Impressum" },
    home: {
      hero: {
        eyebrow: "Ihr IT-Partner",
        title: "Intelligente IT-Loesungen, die Ihr Unternehmen voranbringen.",
        subtitle:
          "MABORIA liefert SQL-, BI-, CRM-, Cloud- und Automationsprogramme mit klaren Ergebnissen und verantwortlicher Umsetzung.",
        primary: "Jetzt starten",
        secondary: "Kontakt aufnehmen",
        bullets: [
          "Daten, Analytics, CRM und Cloud aus einer Hand.",
          "Erfolg gemessen an Verfuegbarkeit, Adoption und ROI - nicht nur an Tickets.",
        ],
      },
      servicesPreview: {
        heading: "Enterprise-Faehigkeiten",
        subheading: "Stabile Datenbasen, klare Insights und automatisierte Kundenprozesse.",
      },
      highlights: {
        title: "Warum Unternehmen Maboria waehlen",
        items: [
          { title: "Outcome-getriebene Lieferung", description: "Roadmaps mit Meilensteinen, Adoption-Zielen und messbaren KPIs." },
          { title: "Security by Design", description: "Identitaeten, Berechtigungen und Datenschutz sind integriert." },
          { title: "Transparenz fuer Entscheider", description: "Dashboards, Audits und Governance-Pakete fuer Management und Aufsicht." },
        ],
      },
      cta: { title: "Bereit fuer Ihren Fahrplan?", action: "Mit Expert:innen sprechen" },
    },
    servicesPage: {
      title: "Leistungen",
      lead: "Entwickelt fuer zuverlaessige, beobachtbare und skalierbare Plattformen.",
      cards: [
        { title: "SQL & Datenmanagement", description: "Architektur, Performance, Migration, Backups und Governance." },
        { title: "Business Intelligence", description: "Dashboards, Reporting-Layer, KPI-Modelle und Analytics fuer Entscheider." },
        { title: "CRM & Automation", description: "CRM-Einrichtung, Pipeline-Design, Playbooks und Workflow-Automation." },
        { title: "Cloud & Plattform", description: "Landing Zones, Monitoring, Kostenkontrolle und Deployments ohne Ausfall." },
      ],
    },
    aboutPage: {
      title: "Ueber Maboria",
      mission:
        "Wir bauen Systeme, die verfuegbar, verstaendlich und anpassungsfaehig bleiben - damit Ihre Teams schneller und sicherer liefern.",
      values: [
        { title: "Zuverlaessigkeit", description: "Messbare SLAs, Desaster-Vorsorge und disziplinierter Change-Prozess." },
        { title: "Klarheit", description: "Transparente Architektur, saubere Dokumentation und nachvollziehbare Entscheidungen." },
        { title: "Innovation", description: "Moderne Daten-Stacks, Automation-first und cloud-native Patterns." },
        { title: "Partnerschaft", description: "Eingebettete Teams mit Fokus auf Ergebnisse, Enablement und Wissenstransfer." },
      ],
      story: "Senior-Architekten, Data Engineers, CRM-Spezialisten und Cloud-Reliability-Leads in einem Team.",
    },
    contactPage: {
      title: "Lassen Sie uns den naechsten Schritt planen",
      subtitle:
        "Teilen Sie Ihre Ziele fuer SQL, BI, CRM, Cloud oder Automation. Wir melden uns innerhalb eines Geschaeftstages mit einem klaren Plan.",
      info: [
        { title: "E-Mail", detail: "contact@maboria.com" },
        { title: "Reaktionszeit", detail: "Innerhalb eines Geschaeftstages" },
        { title: "Zusammenarbeit", detail: "Remote oder vor Ort" },
      ],
      cta: "Nachricht senden",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-[#05060a] via-[#070a12] to-[#03040a] text-slate-50 antialiased">
        <I18nProvider translations={translations}>
          <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-60">
              <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.12),transparent_30%)]" />
            </div>
            <Navbar />
            <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-20 pt-12 md:px-10 lg:px-0">{children}</main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
