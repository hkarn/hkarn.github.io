import { addTranslationForLanguage } from 'react-localize-redux'

export function addTranslations () {
  return function (dispatch) {
    const en = require('../../content/en.json')
    dispatch(addTranslationForLanguage(en, 'en'))
    const sv = require('../../content/sv.json')
    dispatch(addTranslationForLanguage(sv, 'sv'))
    // const ru = require('../../content/ru.json')
    // dispatch(addTranslationForLanguage(ru, 'ru'))
  }
}
