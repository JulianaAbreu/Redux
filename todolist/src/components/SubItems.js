import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editSubTodo } from '../actions';
import './css/SubItem.css'

const SubItems = ({ description, onClick, completed, index, dispatch }) => (
    <li>
        <input value={description} onChange={(e) => {e.preventDefault(),dispatch(editSubTodo(index, e.target.value))}} />
    </li>
)

SubItems.PropTypes = {
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
}

export default connect()(SubItems)