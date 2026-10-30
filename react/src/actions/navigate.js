import { push } from 'react-router-redux'
export function goToPage (myTarget) {
  return function (dispatch) {
    dispatch(push(myTarget))
  }
}
