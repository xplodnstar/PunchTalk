const initialState = {
  messages: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_MSSG':
      return { ...state, messages: [action.payload, ...state.messages] }
    default:
      return state
  }
}