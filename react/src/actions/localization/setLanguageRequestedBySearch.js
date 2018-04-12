export function setLanguageRequestedBySearch (lang) {
  return function (dispatch) {
    dispatch({type: 'SET_REQUESTED_LANG', payload: lang})
  }
}
