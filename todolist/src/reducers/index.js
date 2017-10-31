import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import searchText from './searchText'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  searchText
})

export default todoApp