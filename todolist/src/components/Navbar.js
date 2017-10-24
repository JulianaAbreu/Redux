import React, { Component } from 'react';
import './css/Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className="nav">
                <i className="toggle-menu">ICON</i>
                <header>
                    <h3> To-do List </h3>
                </header>
            </div>
        )
    }
}