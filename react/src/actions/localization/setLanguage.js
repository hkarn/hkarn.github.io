import { setActiveLanguage } from 'react-localize-redux';
export function setLanguage(lang) {
  return function(dispatch){
    dispatch(setActiveLanguage(lang));
  };
}
