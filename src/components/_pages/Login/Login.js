import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { store } = this.context;
    const state = store.getState();

    const handleLogin = (event) => {
      event.preventDefault();
      console.log('Sending:',{
        credentials: state.login.credentials
      });
    }

    return (
      <section className="container login-page">
        <div className="login-wrapper">
          <p>Welcome, please login</p>
          <form id="login-form">
            <div className="inputfield">
              <label htmlFor="username">Username</label>
              <input id="username" type="text" onChange={(e) =>
                store.dispatch({
                  type: 'UPDATE_USERNAME',
                  username: e.target.value
                })
              } />
            </div>
            <div className="inputfield">
              <label htmlFor="password">Password</label>
              <input id="password" type={state.display.displayPassword ? 'text' : 'password'}
                onChange={(e) =>
                  store.dispatch({
                    type: 'UPDATE_PASSWORD',
                    password: e.target.value
                  })
                }
              />
              {
                state.display.displayPassword ? (
                  <i className="fas fa-eye" title="Hide" onClick={() =>
                    store.dispatch({
                      type: 'TOGGLE_PASSWORD'
                    })
                  }></i>
                ) : (
                  <i className="far fa-eye" title="Show" onClick={() =>
                    store.dispatch({
                      type: 'TOGGLE_PASSWORD'
                    })
                  }></i>
                )
              }
            </div>
            <div>
              <input
                className="btn btn-primary"
                type="submit"
                value="Login"
                onClick={handleLogin}
              />
            </div>
          </form>
        </div>
      </section>
    )
  }
};
Login.contextTypes = {
  store: PropTypes.object
};

export default Login;
