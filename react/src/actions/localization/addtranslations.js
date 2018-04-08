import { addTranslationForLanguage } from 'react-localize-redux';

export function addTranslations() {
  return function(dispatch){
    const en = require('../../content/en.json');
    const sv = require('../../content/sv.json');

    dispatch(addTranslationForLanguage(en, 'en'));
    dispatch(addTranslationForLanguage(sv, 'sv'));
  };
}
