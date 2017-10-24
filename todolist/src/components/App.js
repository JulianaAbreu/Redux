import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import Navbar from './Navbar';
import './css/App.css'
import SearchForm from './SearchForm';
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="App">

    <Navbar />
    <SearchForm />
    <VisibleTodoList />
    <Footer />
    <a href="#" class="float">
      <i class="fa fa-plus my-float"></i>
    </a>
    <a href="#openModal" className="float">
      <img src="" />
    </a>

    <div id="openModal" className="modalDialog">
      <div>	<a href="#close" title="Close" className="close">X</a>

        <div className="form-todo">
        <AddTodo />

        </div>

      </div>
    </div>

  </div>
)

export default App