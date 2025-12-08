"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "./I18nProvider";

export function Navbar() {
  const { t, lang, setLang } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Maboria logo"
            width={60}
            height={60}
            sizes="64px"
            priority
            className="h-12 w-12 rounded-full border border-white/10 bg-white/5 object-contain p-1 shadow-lg shadow-cyan-500/20"
          />
          <div className="hidden text-left md:block">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Maboria</p>
            <p className="text-sm font-medium text-slate-100">Intelligent IT Solutions</p>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-medium">
            {t.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold text-slate-200 shadow-md shadow-black/20">
            {(["en", "de"] as const).map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-full px-3 py-1 transition ${
                  lang === code ? "bg-cyan-500 text-slate-950 shadow shadow-cyan-500/30" : "hover:bg-white/10"
                }`}
                type="button"
                aria-label={`Switch language to ${code.toUpperCase()}`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
