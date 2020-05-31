import data from './data';

const getStrings = (lang) => data[lang] && data[lang].strings;

const languages = [...Object.entries(data)].map((item) => ({
  value: item[0],
  label: item[1].label,
}));

export { getStrings, languages };
