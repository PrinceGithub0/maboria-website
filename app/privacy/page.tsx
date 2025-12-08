"use client";

export default function PrivacyPage() {
  return (
    <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 px-6 py-12 shadow-xl md:px-12">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Privacy</p>
        <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Privacy Policy</h1>
        <p className="mt-3 max-w-3xl text-slate-200">
          We protect your data with secure handling, minimal collection, and transparency. This overview outlines how we
          process personal information across our services.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <h2 className="text-lg font-semibold text-white">Data We Collect</h2>
          <p className="mt-2 text-sm text-slate-300">
            Contact details you share with us (name, email, company, message). Operational telemetry is limited to service
            reliability and security monitoring.
          </p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <h2 className="text-lg font-semibold text-white">How We Use Data</h2>
          <p className="mt-2 text-sm text-slate-300">
            To respond to inquiries, deliver services, and improve reliability. No unauthorized resale or third-party
            marketing.
          </p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <h2 className="text-lg font-semibold text-white">Retention & Security</h2>
          <p className="mt-2 text-sm text-slate-300">
            We retain data only as long as necessary for service or legal requirements. Access is role-based; storage is
            encrypted at rest and in transit.
          </p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-black/40 p-4">
          <h2 className="text-lg font-semibold text-white">Your Rights</h2>
          <p className="mt-2 text-sm text-slate-300">
            You may request access, correction, or deletion of your personal data. Contact us to exercise your rights or
            ask questions.
          </p>
        </section>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-300">
        <p className="text-white font-semibold">Contact</p>
        <p>privacy@maboria.com</p>
        <p>+1 (555) 010-2000</p>
        <p>123 Enterprise Way, Suite 400, Frankfurt / Remote</p>
      </div>
    </div>
  );
}
