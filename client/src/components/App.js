import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from "../store"
import ChatRoom from './chat/ChatRoom'
// import Profile from './auth/Profile'
import "../styles/styles.css"
import { AuthProvider, AuthRoute } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"

import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b085f5',
      main: '#7e57c2',
      dark: '#4d2c91',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#cfcfcf',
      main: '#9e9e9e',
      dark: '#707070',
      contrastText: '#000000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const App = props => {

  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <div>
              {/* public routes */}
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />

              {/* private routes */}
              <AuthRoute path="/" exact component={ChatRoom} />
              {/* <AuthRoute path="/profile" exact component={Profile} /> */}
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    </AuthProvider>
  )
}

export default App
