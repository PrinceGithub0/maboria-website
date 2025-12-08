"use client";

import Link from "next/link";
import { useI18n } from "./I18nProvider";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-white/10 bg-black/70 px-6 py-8 text-sm text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p className="text-base font-semibold text-white">{t.footer.rights}</p>
          <p className="text-slate-400">{t.footer.tagline}</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/privacy" className="transition hover:text-white">
            {t.footer.privacy}
          </Link>
          <span className="h-3 w-px bg-white/20" />
          <Link href="/imprint" className="transition hover:text-white">
            {t.footer.imprint}
          </Link>
        </div>
      </div>
    </footer>
  );
}
