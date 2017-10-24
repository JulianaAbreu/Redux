import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { removeTodo, editTodo } from '../actions';
import SubItems from './SubItems.js'
import AddSubTodo from '../containers/AddSubTodo';
import './css/Todo.css';
/* ({ todos, onClick, completed, text, id, dispatch, key, subTodos, index })
 */

const Todo = ({ todos, onClick, completed, text, id, dispatch, key, subTodos, index, onTodoClick }) => (
  <div>
    <li
      onClick={onClick} className="todo"
    >
      <input contentEditable style={{
        textDecoration: completed ? 'line-through' : 'none'
      }} value={text} onChange={(e) => dispatch(editTodo(id, e.target.value))} className="input-title" />

      <div className="content-subitems">
        <ul className="subitems">
          {subTodos.map((subtodo) => (

            <SubItems key={subtodo.id} {...subtodo} onClick={() => onTodoClick(subtodo.id)} />

          ))}
        </ul>
      </div>

      <AddSubTodo index={index} />
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