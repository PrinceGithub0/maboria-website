"use client";

import Image from "next/image";
import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useI18n } from "@/components/I18nProvider";

const contactContent = {
  en: {
    eyebrow: "Contact",
    title: "Let us plan your next move",
    subtitle: "Share your SQL, BI, CRM, cloud, or automation goals. Expect a tailored response within one business day.",
    info: [
      { title: "Email", detail: "info@maboria.com" },
      { title: "Response", detail: "Within 1 business day" },
      { title: "Engagement", detail: "Remote or on-site" },
    ],
    form: {
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@example.com",
      messagePlaceholder: "Share your project goals, timeline, or current stack...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Thanks for reaching out. We will reply within one business day.",
      error: "We could not send your message. Please try again.",
    },
    offices: {
      eyebrow: "Offices",
      heading: "Meet our teams",
      body: "Available on-site or remote with follow-the-sun coverage.",
      note: "Frankfurt | London | New York | Remote",
      locations: [
        { city: "Frankfurt", note: "Data & Cloud" },
        { city: "London", note: "RevOps & Strategy" },
        { city: "New York", note: "Delivery & Support" },
        { city: "Remote", note: "Follow-the-sun SRE" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "How we engage",
      body: "Common questions on delivery, security, and support.",
      items: [
        { q: "How fast do you start?", a: "Discovery within 3 business days; blueprint in 2-3 weeks depending on scope." },
        { q: "Do you support 24/7?", a: "Yes, via our Mission Critical SLA with under 30m response targets." },
        { q: "Security posture?", a: "Identity-first, least privilege, encryption at rest/in transit, audit trails, and runbooks." },
        { q: "Can you embed with our teams?", a: "Yes - embedded squads remote or on-site with weekly KPIs." },
      ],
    },
    heroImageAlt: "Abstract technology workspace",
  },
  de: {
    eyebrow: "Kontakt",
    title: "Planen wir Ihren naechsten Schritt",
    subtitle:
      "Teilen Sie Ihre Ziele fuer SQL, BI, CRM, Cloud oder Automation. Wir melden uns innerhalb eines Geschaeftstages mit einem klaren Plan.",
    info: [
      { title: "E-Mail", detail: "info@maboria.com" },
      { title: "Reaktionszeit", detail: "Innerhalb eines Geschaeftstages" },
      { title: "Zusammenarbeit", detail: "Remote oder vor Ort" },
    ],
    form: {
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "sie@example.com",
      messagePlaceholder: "Teilen Sie Ziele, Timelines oder Ihren aktuellen Stack...",
      submit: "Nachricht senden",
      sending: "Wird gesendet...",
      success: "Danke fuer Ihre Nachricht. Wir melden uns innerhalb eines Werktages.",
      error: "Ihre Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.",
    },
    offices: {
      eyebrow: "Standorte",
      heading: "Lernen Sie unsere Teams kennen",
      body: "Vor Ort oder remote mit Follow-the-sun Abdeckung verfuegbar.",
      note: "Frankfurt | London | New York | Remote",
      locations: [
        { city: "Frankfurt", note: "Data & Cloud" },
        { city: "London", note: "RevOps & Strategy" },
        { city: "New York", note: "Delivery & Support" },
        { city: "Remote", note: "Follow-the-sun SRE" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      heading: "So arbeiten wir",
      body: "Haeufige Fragen zu Delivery, Security und Support.",
      items: [
        { q: "Wie schnell starten Sie?", a: "Discovery innerhalb von 3 Werktagen; Blueprint in 2-3 Wochen je nach Umfang." },
        { q: "Bieten Sie 24/7 Support?", a: "Ja, ueber unser Mission-Critical-SLA mit unter 30 Minuten Reaktionszeit." },
        { q: "Wie ist Ihr Sicherheitsmodell?", a: "Identity-first, Least Privilege, Verschluesselung at rest/in transit, Audit Trails und Runbooks." },
        { q: "Arbeiten Sie eingebettet mit Teams?", a: "Ja - eingebettete Squads remote oder vor Ort mit woechentlichen KPIs." },
      ],
    },
    heroImageAlt: "Abstrakter Technologie-Arbeitsplatz",
  },
} as const;

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactView />
    </Suspense>
  );
}

function ContactView() {
  const { lang } = useI18n();
  const copy = contactContent[lang];
  const router = useRouter();
  const searchParams = useSearchParams();
  const sent = searchParams.get("sent") === "1";
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setFeedback(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include",
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || copy.form.error);
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
      setFeedback(copy.form.success);
      router.replace("/contact?sent=1");
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : copy.form.error);
    }
  }

  return (
    <div className="space-y-10">
      {sent && (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-6 py-4 text-sm text-emerald-200 shadow-lg">
          {copy.form.success}
        </div>
      )}
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black/40 to-white/5 p-8 shadow-xl md:grid-cols-[1.05fr_0.95fr] md:p-12">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.eyebrow}</p>
          <h1 className="text-4xl font-semibold text-white md:text-5xl">{copy.title}</h1>
          <p className="text-base text-slate-200 md:text-lg">{copy.subtitle}</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {copy.info.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.title}</p>
                <p className="mt-2 text-sm font-semibold text-white">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="grid gap-4 rounded-2xl border border-white/10 bg-black/60 p-6 shadow-lg backdrop-blur"
        >
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            {copy.form.name}
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              placeholder={copy.form.namePlaceholder}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            {copy.form.email}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              placeholder={copy.form.emailPlaceholder}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-slate-200">
            {copy.form.message}
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
              placeholder={copy.form.messagePlaceholder}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              required
            />
          </label>
          {(status === "error" || status === "success") && feedback && (
            <p className={`text-sm ${status === "error" ? "text-rose-300" : "text-emerald-300"}`}>{feedback}</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
          >
            {status === "loading" ? copy.form.sending : copy.form.submit}
          </button>
        </form>
      </section>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
        <Image
          src="/images/caspar-camille-rubin-fPkvU7RDmCo-unsplash.jpg"
          alt={copy.heroImageAlt}
          width={1200}
          height={800}
          className="h-full w-full rounded-3xl object-cover shadow-2xl shadow-cyan-500/20"
        />
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.offices.eyebrow}</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.offices.heading}</h2>
            <p className="text-slate-300 md:text-lg">{copy.offices.body}</p>
          </div>
          <p className="text-sm text-slate-400">{copy.offices.note}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {copy.offices.locations.map((loc) => (
            <div key={loc.city} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">{loc.city}</p>
              <p className="mt-1 text-sm text-slate-300">{loc.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl md:p-12">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">{copy.faq.eyebrow}</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">{copy.faq.heading}</h2>
          <p className="text-slate-300 md:text-lg">{copy.faq.body}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {copy.faq.items.map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white">{item.q}</p>
              <p className="mt-2 text-sm text-slate-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
