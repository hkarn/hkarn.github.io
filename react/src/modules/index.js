import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { localeReducer as locale } from 'react-localize-redux'
import requestedLanguage from '../reducers/requestedLanguage'
import animations from '../reducers/animations'

export default combineReducers({
  routing: routerReducer,
  locale,
  requestedLanguage,
  animations
})
