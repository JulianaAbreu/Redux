import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/LoginAction'
import './css/Login.css';
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);

        this.state = {
            user: [],
            status: '',
            email: '',
            password: '',
            error: ''
        }
    }

    handleSubmitLogin(e, dispatch) {
        /* e.preventDefault();
         return dispatch(login(this.state.email, this.state.password)); */

        e.preventDefault();
        type: 'LOGIN',
            axios.post('https://private-d5cad-teste594.apiary-mock.com/login')
                .then((response => {

                    const user = response.data;

                    if (user.email === this.state.email && user.password === this.state.password) {

                        console.log('response;', response)
                        const { email, password } = response.data
                        console.log('aqui') //redirect

                    } else {
                        console.log('Usuário inválido')
                    }
                })).catch(error => {
                    console.log('Erro')
                })

        //Verificar/Validar a request que eu envio no apiary
    }

    handleChangePass(e) {
        e.preventDefault();

        this.setState({
            password: e.target.value
        })
    }

    handleChangeEmail(e) {
        e.preventDefault();

        this.setState({
            email: e.target.value
        })

    }


    /*   handleSubmitLogin(e) {
          e.preventDefault();
  
          const email = this.state.email;
          const password = this.state.password;
          const state = this.state;
  
          fetch('https://private-d5cad-teste594.apiary-mock.com/login', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              }, body: JSON.stringify({
                  email: email,
                  password: password
              }),
          })
              .then(response => {
                  console.log('aqui');
                  if (response.status >= 200 && response.status < 300) {
                      console.log('response;', response)
                  } else {
                      const error = new Error(response.statusText);
                      error.response = response;
                      throw error;
                  }
  
              })
              .catch(error => { console.log('request failed', error); });
      } */



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
                            <form className="form-login" onSubmit={(e) => this.handleSubmitLogin()}>

                                <input type="email" name="email" placeholder="usuario@gmail.com" className="input-email" value={this.state.email} onChange={(e) => this.handleChangeEmail(e)} />
                                <input type="password" name="password" placeholder="password" className="input-password" value={this.state.password} onChange={(e) => this.handleChangePass(e)} />
                                <button type="button" className="btn-login" onClick={(e) => { this.handleSubmitLogin(e) }}>Enter</button>
                                <a href="#" className="forgot-pass">Forgot password?</a>

                            </form>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

