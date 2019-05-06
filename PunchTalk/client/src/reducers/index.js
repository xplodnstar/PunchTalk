const initialState = {
  messages: [],
  username: '',
  users: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MSSG':
      return { ...state, messages: [action.payload, ...state.messages] }
    case 'MAKE_USERNAME':
      return { ...state, username: action.payload, users: [action.payload, ...state.messages] }
    default:
      return state
  }
}