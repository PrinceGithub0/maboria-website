"use client";

import { useEffect, useState } from "react";

type ThemeChoice = "dark" | "light" | "system";

const STORAGE_KEY = "maboria-theme-pref";
const LEGACY_KEY = "maboria-theme";

function resolveTheme(choice: ThemeChoice) {
  if (choice === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return choice;
}

function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  const resolved = resolveTheme(choice);
  root.setAttribute("data-theme", resolved);
  root.setAttribute("data-theme-choice", choice);
}

export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(LEGACY_KEY)) {
      localStorage.removeItem(LEGACY_KEY);
    }
    const stored = localStorage.getItem(STORAGE_KEY) as ThemeChoice | null;
    const initial: ThemeChoice = stored === "light" || stored === "system" ? stored : "dark";
    setChoice(initial);
    applyTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_KEY, choice);
    applyTheme(choice);
    if (choice !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [choice, mounted]);

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1 text-xs font-semibold text-slate-200 shadow-md shadow-black/20">
      <button
        type="button"
        onClick={() => setChoice("light")}
        aria-label="Light theme"
        className={`rounded-full px-2.5 py-1 transition ${
          choice === "light" ? "bg-cyan-500 text-slate-950 shadow shadow-cyan-500/30" : "hover:bg-white/10"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3v2.5" />
          <path d="M12 18.5V21" />
          <path d="M4.2 4.2l1.8 1.8" />
          <path d="M18 18l1.8 1.8" />
          <path d="M3 12h2.5" />
          <path d="M18.5 12H21" />
          <path d="M4.2 19.8L6 18" />
          <path d="M18 6l1.8-1.8" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setChoice("dark")}
        aria-label="Dark theme"
        className={`rounded-full px-2.5 py-1 transition ${
          choice === "dark" ? "bg-cyan-500 text-slate-950 shadow shadow-cyan-500/30" : "hover:bg-white/10"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a6.5 6.5 0 0 0 11.5 11.5Z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setChoice("system")}
        aria-label="System theme"
        className={`rounded-full px-2.5 py-1 transition ${
          choice === "system" ? "bg-cyan-500 text-slate-950 shadow shadow-cyan-500/30" : "hover:bg-white/10"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M7 20h10" />
          <path d="M9 16v4" />
          <path d="M15 16v4" />
        </svg>
      </button>
    </div>
  );
}
