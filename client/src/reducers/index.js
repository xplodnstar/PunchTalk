const initialState = {
  messages: [],
  // username: '',
  users: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MSSG':
      return { ...state, messages: [action.payload, ...state.messages] }
    case 'LIST_USERS':
      return { ...state, users: action.payload }
    default:
      return state
  }
}