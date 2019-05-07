import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from "../store"
import ChatRoom from './chat/ChatRoom'
import "../styles/styles.css"
import { AuthProvider, AuthRoute } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"

const App = props => {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <div>
            {/* public routes */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            {/* private routes */}
            <AuthRoute path="/" exact component={ChatRoom} />
          </div>
        </Router>
      </Provider>
    </AuthProvider>
  )
}

export default App
