import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../actions';
import './css/Todo.css';


const Todo = ({ onClick, completed, text, id, dispatch,key }) => (
<div>
  <li 
    onClick={onClick} className="todo"
    
  >
  <input contentEditable style={{
      textDecoration: completed ? 'line-through' : 'none'
    }} value={text} onChange={(e) => dispatch(editTodo(id, e.target.value))} />
    
    <button
      type="button"
      className="btn-delete"
      onClick={(e) => dispatch(removeTodo(id))}
    >
      Delete
  </button>
  </li>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default connect()(Todo)