import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginSuccess } from '../actions';
import './css/Login.css';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);

        this.state = {
            user: [],
            status: '',
            email: '',
            password: '',

        }
    }

    handleChange(e) {
        e.preventDefault();

        this.setState({
            email: e.target.value
        })

    }

    handleChangePass(e) {
        e.preventDefault();

        this.setState({
            password: e.target.value
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

    handleSubmitLogin(e) {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        const state = this.state;

        fetch('https://private-d5cad-teste594.apiary-mock.com/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                loginSuccess
            }),
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                loginSuccess
            } else {
                const error = new Error(response.statusText);
                error.response = response;
                throw error;
            }

        })
        .catch(error => { console.log('request failed', error); });
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
                            <form className="form-login" onSubmit={e => { this.handleSubmitLogin() }}>

                                <input type="email" name="email" placeholder="usuario@gmail.com" className="input-email" value={this.state.email} onChange={(e) => this.handleChange(e)} />
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

