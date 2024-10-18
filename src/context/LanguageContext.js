import React, { createContext, useState, useContext } from "react";
import { translations } from "../languages/Translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  //Function to get the current translation
  const getTranslation = (id) => {
    return translations[language][id];
  };

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
