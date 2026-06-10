import React, { createContext, useState, useContext, useEffect, useCallback } from "react";
import { translations } from "../languages/Translations";
import { detectLanguageFromLocation } from "../utils/localeDetection";

const STORAGE_KEY = "portfolio-lang";

const LanguageContext = createContext();

function applyDocumentLanguage(lang) {
  document.documentElement.lang = lang === "jp" ? "ja" : lang;
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function initLanguage() {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) {
        setLanguageState(saved);
        applyDocumentLanguage(saved);
      } else {
        const detected = await detectLanguageFromLocation();
        setLanguageState(detected);
        localStorage.setItem(STORAGE_KEY, detected);
        applyDocumentLanguage(detected);
      }
      setIsReady(true);
    }
    initLanguage();
  }, []);

  const setLanguage = useCallback((lang) => {
    if (!translations[lang]) return;
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    applyDocumentLanguage(lang);
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const getTranslation = (id) => {
    return translations[language]?.[id] ?? translations.en[id] ?? id;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, handleLanguageChange, getTranslation, isReady }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
