import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import './css/Login.css';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);

        this.state = {
            account: [
                {
                    email: 'juliana@gmail.com',
                    password: '123'
                }
            ],
            emailtxt: '',
            passwordtxt: ''
        }
    }

    handleChange(e) {
        e.preventDefault();
       
        this.setState({
            emailtxt: e.target.value
        })

    }

    handleChangePass(e) {
        e.preventDefault();

        this.setState({
            passwordtxt: e.target.value
        })
    }

    handleSubmitLogin(e) {
        e.preventDefault();
        const users = this.state.account;
        const email = this.users.email;
        const password = this.users.password;

        if (users.email !== this.state.emailtxt &&  users.password  !== this.state.passwordtxt) {
            console.log("Usuário invalido");
        } else {
            console.log('Usuário valido');
        }
    }

    render() {
        const users = this.state;
        return (
            <main>
                <section className="content-login">
                    <div className="border-content">
                        <div className="header-login">
                            <h2>Login</h2>
                        </div>
                        <div className="content-form">
                            <form className="form-login" onSubmit={this.handleSubmitLogin.bind(this)}>

                                <input type="email" name="email" placeholder="usuario@gmail.com" className="input-email" value={this.props.emailtxt} onChange={(e) => this.handleChange(e)} />
                                <input type="password" name="password" placeholder="password" className="input-password" value={this.props.passwordtxt} onChange={(e) => this.handleChangePass(e)} />
                                <button type="button" className="btn-login" onClick={this.handleSubmitLogin}>Enter</button>
                                <a href="#" className="forgot-pass">Forgot password?</a>

                            </form>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

