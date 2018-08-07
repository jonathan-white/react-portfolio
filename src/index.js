import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

// Reducers
// ==============================================================

// Skill reducer
const skill = (state, action) => {
  switch(action.type) {
    case 'TOGGLE_SKILL':
      if(state.selectedSkill === action.selectedSkill) {
        return {
          ...state,
          selectedSkill: ''
        };
      }
      return {
        ...state,
        selectedSkill: action.selectedSkill
      }
    default:
      return state;
  }
};

// Password hide/show reducer
const display = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_PASSWORD':
      return {
        ...state,
        displayPassword: !state.displayPassword
      }
    default:
      return state;
  }
}

const login = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {
        ...state,
        credentials: {
          ...state.credentials,
          username: action.username
        }
      }
    case 'UPDATE_PASSWORD':
      return {
        ...state,
        credentials: {
          ...state.credentials,
          password: action.password
        }
      }
    default:
      return state;
  }
}

// Reducer composition
const portfolioApp = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_SKILL':
      return skill(state, action);
    case 'TOGGLE_PASSWORD':
      return display(state, action);
    case 'UPDATE_USERNAME':
      return login(state, action);
    case 'UPDATE_PASSWORD':
      return login(state, action);
    default:
      return state;
  }
}

// Reducer Testing
// ==========================================================
const testToggleSkill = () => {
  const stateBefore = { selectedSkill: '' }
  const stateAfter = { selectedSkill: 'React' }
  const action = {
    type: 'TOGGLE_SKILL',
    selectedSkill: 'React'
  }

  deepFreeze(stateBefore);
  expect(
    portfolioApp(stateBefore, action)
  ).toEqual(stateAfter);
};

const testTogglePasswordDisplay = () => {
  const stateBefore = { displayPassword: true }
  const stateAfter = { displayPassword: false }
  const action = { type: 'TOGGLE_PASSWORD' }

  deepFreeze(stateBefore);
  expect(
    portfolioApp(stateBefore, action)
  ).toEqual(stateAfter);
};

const testUpdateUsername = () => {
  const stateBefore = {}
  const stateAfter = {
    credentials: {
      username: 'bradone'
    }
  }
  const action = {
    type: 'UPDATE_USERNAME',
    username: 'bradone'
  }

  deepFreeze(stateBefore);
  expect(
    portfolioApp(stateBefore, action)
  ).toEqual(stateAfter);
};

const testUpdatePassword = () => {
  const stateBefore = {
    credentials: {
      username: 'bradone',
      password: 'Password1'
    }
  }
  const stateAfter = {
    credentials: {
      username: 'bradone',
      password: 'strongPassW0rd!'
    }
  }
  const action = {
    type: 'UPDATE_PASSWORD',
    password: 'strongPassW0rd!'
  }

  deepFreeze(stateBefore);
  expect(
    portfolioApp(stateBefore, action)
  ).toEqual(stateAfter);
};

testToggleSkill();
testTogglePasswordDisplay();
testUpdateUsername();
testUpdatePassword();
console.log('All tests passed.');

// Context Provider
class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}
Provider.childContextTypes = {
  store: PropTypes.object
};

ReactDOM.render(
  <Provider store={createStore(portfolioApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
