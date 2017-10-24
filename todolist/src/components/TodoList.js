import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import './css/TodoList.css';

const TodoList = ({ todos, onTodoClick }) => (
  <div className="todolist">
    <ul className="wraptodos">
      {todos.map((todo, index) => (
        <Todo key={todo.id} {...todo} index={index} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList