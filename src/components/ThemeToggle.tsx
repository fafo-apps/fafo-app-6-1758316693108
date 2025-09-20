"use client";

import { useEffect, useState } from "react";

type Theme = "funky" | "minimal";
const STORAGE_KEY = "theme";

function applyTheme(t: Theme) {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", t);
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("funky");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Theme | null;
    const initial: Theme = saved === "minimal" ? "minimal" : "funky";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function toggle() {
    const next: Theme = theme === "minimal" ? "funky" : "minimal";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={theme === "minimal"}
      title={theme === "minimal" ? "Switch to Funky theme" : "Switch to Minimal theme"}
      className="px-3 py-1 rounded-md border border-black/15 dark:border-white/20 text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
    >
      {theme === "minimal" ? "Funky theme" : "Minimal theme"}
    </button>
  );
}
