import { translations } from './translations';

const getLocalization = (lang) => translations[lang].strings;

const languages = [...Object.entries(translations)].map((item) => ({
  value: item[0],
  label: item[1].label,
}));

export { getLocalization, languages };
