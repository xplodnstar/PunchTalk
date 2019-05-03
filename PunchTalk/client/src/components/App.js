import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import ChatRoom from './ChatRoom'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChatRoom></ChatRoom>
      </Provider>
    )
  }
}

export default App
