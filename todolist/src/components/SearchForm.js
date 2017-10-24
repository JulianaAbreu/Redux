

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { searchTodo } from '../actions';
import './css/SearchForm.css'



const SearchForm = ({ dispatch,key, onChange, value}) => (

<div className="search-todo">
<form className="form">
    <input type="search" className="input-search" placeholder="Pesquisar tarefa..." onChange={(e) => dispatch(searchTodo(e.target.value))} value={value} />
    <button type="button" className="btn-search">Search</button>
</form>
</div>
)

SearchForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  value:PropTypes.string.isRequired
}

export default connect()(SearchForm)