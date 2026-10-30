export default function animations (state = {}, action) {
  switch (action.type) {
    case 'ANIMATION_SET':
      return {...state, ...action.payload}
    default:
      return state
  }
}
