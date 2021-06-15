import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./data/language/english.json";
import chinese from "./data/language/chinese.json";
const resources = {
  en: {
    translation: english
  },
  ch: {
    translation: chinese
  }
}

let lang = localStorage.getItem("lang");
  if(lang == null || lang == undefined){
    localStorage.setItem("lang","en");
  }
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: lang, 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;