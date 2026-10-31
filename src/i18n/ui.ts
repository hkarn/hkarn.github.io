export const locales = ['en', 'sv'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';
export type Localized<T = string> = Record<Locale, T>;

export const localeNames: Record<Locale, { short: string; long: string; htmlLang: string; og: string }> = {
  en: { short: 'EN', long: 'English', htmlLang: 'en', og: 'en_GB' },
  sv: { short: 'SV', long: 'Svenska', htmlLang: 'sv', og: 'sv_SE' },
};

const en = {
  'meta.title': 'Håkan Arnoldson | BI and data-warehouse developer, Göteborg',
  'meta.description': 'Håkan Kindström Arnoldson builds data warehouses in Göteborg and small web apps on the side. Projects, CV and contact.',
  'meta.cv': 'CV for Håkan Arnoldson: Business Intelligence consultant working with SQL Server, SSAS and SSRS, with a background in web development.',
  'meta.projects': 'Web projects by Håkan Arnoldson: personal-finance tools, a vocabulary trainer, an AI API tester and more, with live sites and source code.',
  'meta.contact': 'Contact Håkan Arnoldson, BI and data-warehouse developer in Göteborg, on LinkedIn or GitHub.',
  'meta.jobTitle': 'BI and data-warehouse developer',
  'meta.imageAlt': 'Data first, web after. Håkan Arnoldson, BI and data-warehouse developer, Göteborg',
  'skip': 'Skip to content',
  'nav.label': 'Main',
  'nav.work': 'Projects',
  'nav.contact': 'Contact',
  'lang.label': 'Language',
  'lang.switchTo': 'Byt till svenska',
  'hero.line1': 'Data first,',
  'hero.line2': 'web after.',
  'hero.lead': 'Håkan Arnoldson builds data warehouses in Göteborg, and small, careful web apps on the side.',
  'hero.cta': 'See the projects',
  'cv.languages': 'Languages',
  'cv.experience': 'Experience',
  'cv.education': 'Education',
  'cv.moreExperience': 'Also',
  'cv.moreEducation': 'Also',
  'cv.lead': 'BI and data-warehouse developer in Göteborg, with a web-development background.',
  'cv.full': 'Full profile on LinkedIn',
  'cv.portrait': 'Portrait of Håkan Arnoldson',
  'projects.visit': 'Visit website',
  'projects.source': 'Source',
  'contact.lead': 'Say hello on LinkedIn, or take a look at my code.',
  'contact.location': 'Göteborg, Sweden',
  '404.title': 'Page not found',
  '404.body': 'That page does not exist, or it moved when the site was rebuilt.',
  '404.home': 'Go to the start page',
};
export type UIKey = keyof typeof en;
type Dict = Record<UIKey, string>;
const sv: Dict = {
  'meta.title': 'Håkan Arnoldson | BI- och datalagerutvecklare, Göteborg',
  'meta.description': 'Håkan Kindström Arnoldson bygger datalager i Göteborg och små webbappar vid sidan av. Projekt, CV och kontakt.',
  'meta.cv': 'CV för Håkan Arnoldson: Business Intelligence-konsult med SQL Server, SSAS och SSRS, och bakgrund inom webbutveckling.',
  'meta.projects': 'Webbprojekt av Håkan Arnoldson: verktyg för privatekonomi, glosträning, en testkonsol för AI-API:er med mera, med webbplatser och källkod.',
  'meta.contact': 'Kontakta Håkan Arnoldson, BI- och datalagerutvecklare i Göteborg, via LinkedIn eller GitHub.',
  'meta.jobTitle': 'BI- och datalagerutvecklare',
  'meta.imageAlt': 'Data först, webb sen. Håkan Arnoldson, BI- och datalagerutvecklare, Göteborg',
  'skip': 'Hoppa till innehållet',
  'nav.label': 'Huvudmeny',
  'nav.work': 'Projekt',
  'nav.contact': 'Kontakt',
  'lang.label': 'Språk',
  'lang.switchTo': 'Switch to English',
  'hero.line1': 'Data först,',
  'hero.line2': 'webb sen.',
  'hero.lead': 'Håkan Arnoldson bygger datalager i Göteborg, och små, omsorgsfulla webbappar vid sidan av.',
  'hero.cta': 'Se projekten',
  'cv.languages': 'Språk',
  'cv.experience': 'Erfarenhet',
  'cv.education': 'Utbildning',
  'cv.moreExperience': 'Dessutom',
  'cv.moreEducation': 'Dessutom',
  'cv.lead': 'BI- och datalagerutvecklare i Göteborg, med bakgrund inom webbutveckling.',
  'cv.full': 'Hela profilen på LinkedIn',
  'cv.portrait': 'Porträtt av Håkan Arnoldson',
  'projects.visit': 'Besök webbplatsen',
  'projects.source': 'Källkod',
  'contact.lead': 'Säg hej på LinkedIn eller ta en titt på min kod.',
  'contact.location': 'Göteborg, Sverige',
  '404.title': 'Sidan finns inte',
  '404.body': 'Sidan finns inte, eller så flyttade den när webbplatsen byggdes om.',
  '404.home': 'Till startsidan',
};
export const ui: Record<Locale, Dict> = { en, sv };
export function useTranslations(lang: Locale) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLocale][key];
}
