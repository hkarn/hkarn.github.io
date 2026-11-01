import type { Localized } from '../i18n/ui';

// Summarised from the public LinkedIn profile (linkedin.com/in/arnoldson).
// Deliberately undated: the full, dated record stays on LinkedIn.
// `experience` and `education` are the roles set large; `moreExperience`
// and `moreEducation` are the compact additional lines.

export interface Role {
  role: Localized;
  org: string | Localized;
  note?: Localized;
}

export const experience: Role[] = [
  {
    role: { en: 'Business Intelligence consultant', sv: 'Business Intelligence-konsult' },
    org: 'Twoday',
    note: {
      en: 'Data warehouses, pipelines and analysis models for clients, built on SQL Server, SSAS and SSRS. Part of the INSIKT team.',
      sv: 'Datalager, pipelines och analysmodeller åt kunder, byggda på SQL Server, SSAS och SSRS. En del av INSIKT-teamet.',
    },
  },
  {
    role: { en: 'Webmaster', sv: 'Webbansvarig' },
    org: 'Hisinge Buss / Rekå Resor',
    note: {
      en: 'Websites and digital marketing for the bus companies. Built the tour website with a custom PHP CMS, a bus-hire price calculator in React using Google Maps data, and a tour booking system in React with a PHP back end. Also IT purchasing and support.',
      sv: 'Webbplatser och digital marknadsföring för bussbolagen. Byggde resesajten med ett eget CMS i PHP, en priskalkylator för busshyra i React med data från Google Maps och ett bokningssystem för resor i React med back-end i PHP. Även IT-inköp och support.',
    },
  },
  {
    role: { en: 'Freelance IT consultant', sv: 'Frilansande IT-konsult' },
    org: 'Gothenburg Office',
    note: {
      en: 'Part-time sole trader for office services and programming, with long-term assignments for Hisinge Buss.',
      sv: 'Enskild firma på deltid för kontorstjänster och programmering, med långa uppdrag åt Hisinge Buss.',
    },
  },
  {
    role: { en: 'Tech support, Nordic languages', sv: 'Teknisk support, nordiska språk' },
    org: 'eyeo (Adblock Plus)',
    note: {
      en: 'Filter-list author and technical support for Nordic-language users, freelance and remote.',
      sv: 'Författare av filterlistor och teknisk support för nordiska användare, på frilansbasis och distans.',
    },
  },
];

export const moreExperience: Role[] = [
  { role: { en: 'Sergeant, squad leader in an anti-aircraft communications unit', sv: 'Furir, gruppchef i en sambandsgrupp inom luftvärnet' }, org: { en: 'Swedish Army', sv: 'Armén' } },
  { role: { en: 'Founder, virtual-office services for small companies', sv: 'Grundare, virtuella kontorstjänster för småföretag' }, org: 'Business Auxiliary Services' },
  { role: { en: 'Machine operator, packaging', sv: 'Maskinoperatör, paketering' }, org: 'Arla Foods' },
  { role: { en: 'Vehicle care, train turnaround', sv: 'Fordonsvård, tågvändning' }, org: 'ISS Facility Services' },
];

export const education: Role[] = [
  {
    role: { en: 'Full-stack JavaScript developer', sv: 'Fullstackutvecklare JavaScript' },
    org: { en: 'Lernia, higher vocational degree', sv: 'Lernia, yrkeshögskoleexamen' },
  },
  {
    role: { en: 'Philosophy, Java and databases', sv: 'Filosofi, Java och databaser' },
    org: 'Umeå universitet',
  },
  {
    role: { en: 'Economics, business administration, statistics and Russian', sv: 'Nationalekonomi, företagsekonomi, statistik och ryska' },
    org: 'Göteborgs universitet',
  },
];

export const moreEducation: Role[] = [
  { role: { en: 'Russian language', sv: 'Ryska' }, org: 'Lomonosov Moscow State University' },
  { role: { en: 'Russian language, A2', sv: 'Ryska, A2' }, org: 'Liden & Denz, Moscow' },
];

export const languages: Localized = {
  en: 'Swedish (native), English (professional), Russian (basic)',
  sv: 'Svenska (modersmål), engelska (professionell), ryska (grundläggande)',
};
