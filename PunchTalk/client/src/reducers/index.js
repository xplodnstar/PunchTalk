const initialState = {
  messages: [],
  username: '',

}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MSSG':
      return { ...state, messages: [action.payload, ...state.messages] }
    case 'MAKE_USERNAME':
      return { ...state, username: action.payload }
    default:
      return state
  }
}