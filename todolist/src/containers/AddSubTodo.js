import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSubTodo } from '../actions';
import '../components/AddSubTodo.css';


  let AddSubTodo = ({ dispatch, index }) => {
    let inputSubTodo

    return (
        <div className="form-todo">
            <form className="form-addSubTodo"
                onSubmit={e => {
                    e.preventDefault()
                    if (!inputSubTodo.value.trim()) {
                        return
                    }
                    dispatch(addSubTodo(inputSubTodo.value, index))
                    inputSubTodo.value = '' 
                }}
            >
                <input className= "input-subTodo" placeholder="Insira um novo item..."
                    ref={node => {
                        inputSubTodo = node
                    }}
                />
               
            </form>
        </div>
    )
}

AddSubTodo = connect()(AddSubTodo)
export default AddSubTodo;