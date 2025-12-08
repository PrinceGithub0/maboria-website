"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type Lang = "en" | "de";

export type AppContent = {
  nav: { label: string; href: string }[];
  footer: { rights: string; tagline: string; privacy: string; imprint: string };
  home: any;
  servicesPage: any;
  aboutPage: any;
  contactPage: any;
};

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: AppContent;
  translations: Record<Lang, AppContent>;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  translations,
  defaultLang = "en",
  children,
}: {
  translations: Record<Lang, AppContent>;
  defaultLang?: Lang;
  children: ReactNode;
}) {
  const [lang, setLang] = useState<Lang>(defaultLang);
  const value = useMemo<I18nContextValue>(
    () => ({ lang, setLang, t: translations[lang], translations }),
    [lang, translations],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
