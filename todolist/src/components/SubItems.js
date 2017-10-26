import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editSubTodo } from '../actions';
import { removeSubTodo } from '../actions';
import './css/SubItem.css'

const SubItems = ({ description, onClick, completed, todoIndex, dispatch, subtodoIndex }) => (
    <li>
        <input value={description} onChange={(e) => { e.preventDefault(), dispatch(editSubTodo(todoIndex, e.target.value, subtodoIndex)) }} className="input-subitem" />
        <button type="button" onClick={(e) => { e.preventDefault(), dispatch(removeSubTodo(todoIndex, subtodoIndex)) }}>X</button>
    </li>
)

SubItems.PropTypes = {
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired
}

export default connect()(SubItems)