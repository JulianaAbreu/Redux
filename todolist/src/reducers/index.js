import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import searchText from './searchText'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducers } from 'react-router-redux'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  searchText,
  routing:routerReducers
})

export default todoApp