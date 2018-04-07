import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { localeReducer as locale } from 'react-localize-redux';


export default combineReducers({
  routing: routerReducer,
  locale,
});
