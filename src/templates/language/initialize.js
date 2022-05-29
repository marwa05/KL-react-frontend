import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import en from "../../assets/languageResources/en.json";
import kr from "../../assets/languageResources/kr.json";
import fr from "../../assets/languageResources/fr.json";
import ar from "../../assets/languageResources/ar.json";

import { defaultLanguage } from "../../assets/languageResources/languages.json";

i18next
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: { en, kr, ar, fr },
    fallbackLng: defaultLanguage,
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: "language",
      caches: ["localStorage"]
    }
  });
