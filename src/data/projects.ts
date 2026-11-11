import type { Localized } from '../i18n/ui';

export interface Project {
  name: Localized;
  summary: Localized;
  live: Localized;
  source: string;
}

// Projects with a public live site, in display order.
export const projects: Project[] = [
  {
    name: { en: 'MoneyWorks / Pengar jobbar', sv: 'Pengar jobbar / MoneyWorks' },
    summary: {
      en: 'Personal-finance tools in English and Swedish. Explore financial independence with a FIRE calculator that brings savings, investment returns and pension income into the same plan.',
      sv: 'Verktyg för privatekonomi på svenska och engelska. Utforska ekonomisk frihet med en FIRE-kalkylator som samlar sparande, avkastning och pensionsinkomster i samma plan.',
    },
    live: { en: 'https://moneyworks.site/', sv: 'https://pengarjobbar.nu/' },
    source: 'https://github.com/GothenburgOffice/moneyworks',
  },
  {
    name: { en: 'Vocabulary.Trainer', sv: 'Vocabulary.Trainer' },
    summary: {
      en: 'Save word lists, practise between language pairs and focus on the words that need more work. Statistical sampling adapts the tests to your results, and a built-in LLM integration powers several AI-assisted features.',
      sv: 'Spara ordlistor, öva mellan språkpar och fokusera på orden som behöver mer träning. Statistiskt urval anpassar proven efter dina resultat, och en inbyggd LLM-integration driver flera AI-assisterade funktioner.',
    },
    live: { en: 'https://vocabulary.training/', sv: 'https://vocabulary.training/' },
    source: 'https://github.com/GothenburgOffice/vocabulary-training',
  },
  {
    name: { en: 'Spinnfiskeklubben Vinga', sv: 'Spinnfiskeklubben Vinga' },
    summary: {
      en: 'The fishing club’s website, with information about the association, its activities and its island clubhouse on Stora Rävholmen.',
      sv: 'Fiskeklubbens webbplats med information om föreningen, verksamheten och klubbstugan på Stora Rävholmen.',
    },
    live: { en: 'https://spinnfiskeklubbenvinga.se/', sv: 'https://spinnfiskeklubbenvinga.se/' },
    source: 'https://github.com/hkarn/spinnfiskeklubben-vinga-website',
  },
  {
    name: { en: 'LLM Playground', sv: 'LLM Playground' },
    summary: {
      en: 'A playground for LLM providers and routers. Send requests, inspect the full response, and try small LLM tools and games. Works with OpenRouter, Requesty, LLM Gateway or any OpenAI-compatible endpoint; bring your own API key.',
      sv: 'En lekplats för LLM-leverantörer och routrar. Skicka förfrågningar, granska hela svaret och prova små LLM-verktyg och spel. Fungerar med OpenRouter, Requesty, LLM Gateway eller valfri OpenAI-kompatibel endpoint; ta med din egen API-nyckel.',
    },
    live: {
      en: 'https://hkarn.github.io/LLM-PlayGround/',
      sv: 'https://hkarn.github.io/LLM-PlayGround/',
    },
    source: 'https://github.com/hkarn/LLM-PlayGround',
  },
  {
    name: { en: 'Currency converter', sv: 'Valutaomvandlare' },
    summary: {
      en: 'Convert currencies and generate your own cross-rate tables. A JavaScript application using exchange-rate data from Coinbase.',
      sv: 'Räkna om valutor och skapa egna korskurstabeller. En JavaScript-applikation som använder valutakurser från Coinbase.',
    },
    live: {
      en: 'https://hkarn.github.io/currency-exchange-rates-front/',
      sv: 'https://hkarn.github.io/currency-exchange-rates-front/',
    },
    source: 'https://github.com/hkarn/currency-exchange-rates-front',
  },
  {
    name: { en: 'Vocabulary tester · original', sv: 'Glosövning · originalet' },
    summary: {
      en: 'The original vocabulary exercise: enter word pairs or paste lists, then test yourself on the translations. Includes CSV import and export.',
      sv: 'Den ursprungliga glosövningen: skriv in ordpar eller klistra in listor och testa sedan översättningarna. Med import och export av CSV-filer.',
    },
    live: {
      en: 'https://hkarn.github.io/vocabulary-tester-site/',
      sv: 'https://hkarn.github.io/vocabulary-tester-site/',
    },
    source: 'https://github.com/hkarn/vocabulary-tester-site',
  },
];
