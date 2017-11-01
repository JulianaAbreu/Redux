import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import Login from './components/Login'
import {Router, Route, browserHistory} from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


let store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  const history = syncHistoryWithStore (browserHistory, store)

render(
    <Provider store={store}>
      <Router history={history}>
      {/*  <App /> */}
      <Route  path="Login" component={Login} />
      <Login />
      </Router>
    </Provider>,
  document.getElementById('root')
)