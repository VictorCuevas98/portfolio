const SPANISH_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO", "DO",
  "HN", "PY", "SV", "NI", "CR", "PA", "UY", "PR", "GQ",
]);

const JAPANESE_COUNTRIES = new Set(["JP"]);

export function countryToLanguage(countryCode) {
  if (!countryCode) return null;
  const code = countryCode.toUpperCase();
  if (JAPANESE_COUNTRIES.has(code)) return "jp";
  if (SPANISH_COUNTRIES.has(code)) return "es";
  return "en";
}

export function browserLanguageToLocale() {
  const lang = (navigator.language || "en").toLowerCase();
  if (lang.startsWith("ja")) return "jp";
  if (lang.startsWith("es")) return "es";
  return "en";
}

export async function detectLanguageFromLocation() {
  try {
    const response = await fetch("https://api.country.is/");
    if (response.ok) {
      const data = await response.json();
      const fromCountry = countryToLanguage(data.country);
      if (fromCountry) return fromCountry;
    }
  } catch {
    // Fall back to browser language when geo lookup fails
  }
  return browserLanguageToLocale();
}

export const GREETINGS = {
  en: { line1: "Hello", line2: "I'm Victor" },
  es: { line1: "Hola", line2: "Me llamo Victor" },
  jp: { line1: "お世話になっております", line2: "ビクターと申します。" },
};

export const GREETING_ORDER = ["en", "es", "jp"];
