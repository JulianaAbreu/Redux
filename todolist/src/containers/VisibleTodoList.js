import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { searchTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const getSeachTodos = (todos, searchText) => {
  if (searchText !== '') {
    return [
      ...todos.filter(todo => todo.text.includes(searchText)),
    ]
  }
  return todos;
}

const mapStateToProps = state => {
  let todos = getVisibleTodos(state.todos, state.visibilityFilter);

  todos = getSeachTodos(todos, state.searchText);

  return {
    todos,
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