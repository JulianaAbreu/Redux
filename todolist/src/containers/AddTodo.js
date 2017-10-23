import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './AddTodo.css';

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div className="form-todo">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input className="input-add"
                    ref={node => {
                        input = node
                    }}
                />
                <a href="#close" >
                    <button className="btn-add">Add</button>
                </a>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo