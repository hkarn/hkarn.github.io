import { initialize } from 'react-localize-redux'
// Loader component uses localized translations and language list

const languages = [
  { name: 'English', code: 'en' },
  { name: 'Svenska', code: 'sv' },
  { name: 'Русский', code: 'ru' }
]

let browserlanguage = 'en'
let defaultlanguage = 'en'

function detectBrowserLanguage () {
  return (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage
}

export function localizationInitialize () {
  try {
    browserlanguage = detectBrowserLanguage().substring(0, 2)
  } catch (e) {
    browserlanguage = 'en'
  }

  try {
    const languageCodes = Object.values(languages).map(val => { return val.code })
    if (languageCodes.includes(browserlanguage)) {
      defaultlanguage = browserlanguage
    }
  } catch (e) {
    defaultlanguage = 'en'
  }

  return function (dispatch) {
    dispatch(initialize(languages, { defaultLanguage: defaultlanguage }))
  }
}
