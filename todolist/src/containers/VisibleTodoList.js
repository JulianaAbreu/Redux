import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { searchTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter, searchText) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SEARCH_TODO':
    return Object.assign({}, todos, { text: searchText });
    
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))

    },
    onChangeInput: searchText => {
      dispatch(searchTodo(searchText))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList