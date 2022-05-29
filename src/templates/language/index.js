import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import supportedLanguages from "../../assets/languageResources/languages.json";

const normalize = (language) => language.slice(0, 2).toLowerCase();

const useLanguage = () => {
  const [t, i18n] = useTranslation();

  const initialLanguage = normalize(i18n.language);
  const [language, setLanguage] = useState(initialLanguage);

  const updateLanguage = () => i18n.changeLanguage(language);
  useEffect(updateLanguage, [i18n, language]);

  const { languageList } = supportedLanguages;
  const options = { language, setLanguage, translate: t, languageList };
  return options;
};

export default useLanguage;
