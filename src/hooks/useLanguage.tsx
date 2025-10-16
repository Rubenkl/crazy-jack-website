import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en, Translations } from "@/i18n/en";
import { nl } from "@/i18n/nl";

export const SUPPORTED_LANGUAGES = ["en", "nl"] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = { en, nl };

export const isSupportedLanguage = (value: string | null): value is Language =>
  !!value && SUPPORTED_LANGUAGES.includes(value as Language);

const getBaseSegments = () =>
  (import.meta.env.BASE_URL ?? "/")
    .split("/")
    .filter(Boolean);

const getLanguageFromPath = (): Language | null => {
  const baseSegments = getBaseSegments();
  const pathSegments = window.location.pathname.split("/").filter(Boolean);
  const relativeSegments = pathSegments.slice(baseSegments.length);
  const [firstSegment] = relativeSegments;

  return isSupportedLanguage(firstSegment ?? null) ? firstSegment : null;
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (isSupportedLanguage(urlLang)) return urlLang;

    const pathLang = getLanguageFromPath();
    if (pathLang) return pathLang;

    const stored = localStorage.getItem("language");
    if (isSupportedLanguage(stored)) return stored;

    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("nl") ? "nl" : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;

    // Update URL without reload
    const url = new URL(window.location.href);
    const baseSegments = getBaseSegments();
    const pathSegments = url.pathname.split("/").filter(Boolean);
    const relativeSegments = pathSegments.slice(baseSegments.length);

    if (relativeSegments[0] && isSupportedLanguage(relativeSegments[0])) {
      relativeSegments[0] = lang;
    } else {
      relativeSegments.unshift(lang);
    }

    const updatedPath = `/${[...baseSegments, ...relativeSegments].join("/")}/`.replace(/\/{2,}/g, "/");
    url.pathname = updatedPath;
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
