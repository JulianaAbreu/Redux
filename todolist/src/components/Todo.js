import React from 'react'
import PropTypes from 'prop-types'
import removeTodo from '../containers/RemoveTodo';

const Todo = ({ onClick, completed, text, deleteTodo,onClickRemove }) => (

  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
    <button
      type="button"
      className="todo-delete"
      onClickRemove={() => Todo(text.id)}
    >
      Delete
  </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired
}

export default Todo