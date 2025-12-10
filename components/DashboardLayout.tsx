"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = { title: string; children: React.ReactNode; variant?: "admin" | "client" };

const links = [
  { href: "/dashboard", label: "Client Dashboard" },
  { href: "/admin", label: "Admin" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function DashboardLayout({ title, children, variant = "client" }: Props) {
  const pathname = usePathname();
  return (
    <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
      <aside className="rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{variant === "admin" ? "Admin" : "Client"}</p>
        <h2 className="mt-2 text-lg font-semibold text-white">Navigation</h2>
        <nav className="mt-4 grid gap-2 text-sm text-slate-200">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 transition ${
                pathname === link.href ? "bg-cyan-500/20 text-white ring-1 ring-cyan-400/40" : "hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <div className="flex flex-col gap-2 border-b border-white/10 pb-4">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">{variant === "admin" ? "Admin" : "Client"}</p>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>
        <div className="pt-6">{children}</div>
      </section>
    </div>
  );
}
