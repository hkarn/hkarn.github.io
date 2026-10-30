export default function requestedLanguage (state = {}, action) {
  switch (action.type) {
    case 'SET_REQUESTED_LANG':
      return action.payload
    default:
      return state
  }
}
