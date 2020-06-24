import data from './data';

const getLocalization = (lang) => data[lang].strings;
const languages = [...Object.entries(data)].map((item) => ({
  value: item[0],
  label: item[1].label,
}));

export { getLocalization, languages };
