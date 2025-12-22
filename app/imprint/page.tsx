"use client";

export default function ImprintPage() {
  return (
    <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 px-6 py-12 shadow-xl md:px-12">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Imprint</p>
        <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Legal Notice</h1>
        <p className="mt-3 max-w-3xl text-slate-200">Corporate and legal information for Maboria.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-slate-300">
          <p className="text-white text-lg font-semibold">Company</p>
          <p className="mt-2">Maboria IT Solutions</p>
          <p>Friedrichstrasse 123</p>
          <p>10117 Berlin, Germany</p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-slate-300">
          <p className="text-white text-lg font-semibold">Contact</p>
          <p className="mt-2">info@maboria.com</p>
          <p>+49 30 3987 1200</p>
          <p>Mon - Fri, 9:00 - 18:00 CET</p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-slate-300">
          <p className="text-white text-lg font-semibold">Management</p>
          <p className="mt-2">Managing Director: Collins Eromosele</p>
          <p>Register: Amtsgericht Berlin-Charlottenburg, HRB 123456 B</p>
          <p>VAT ID: DE123456789</p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-slate-300">
          <p className="text-white text-lg font-semibold">Dispute Resolution</p>
          <p className="mt-2">
            We do not take part in online dispute resolutions at consumer arbitration boards. Please contact us directly for
            any concerns.
          </p>
        </section>
      </div>
    </div>
  );
}
