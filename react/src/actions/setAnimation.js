export function setAnimation (target, active) {
  return function (dispatch) {
    dispatch({
      type: 'ANIMATION_SET',
      payload: {
        [target]: active
      }
    })
  }
}
