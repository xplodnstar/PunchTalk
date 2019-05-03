import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Form from './Form'
import Messages from './Messages'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login></Login>
        <Form></Form>
        <Messages></Messages>
      </Provider>
    )
  }
}

export default App
