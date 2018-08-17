import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

// Reducers
// ==============================================================

// Skill reducer
const skill = (state = {}, action) => {
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
const display = (state = {}, action) => {
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

const portfolio = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return {
        ...state,
        projects: action.projects
      }
    case 'FOUND_PROJECTS':
      return {
        ...state,
        hasProjects: true
      }
    case 'NO_PROJECTS':
      return {
        ...state,
        hasProjects: false
      }
    default:
      return state;
  }
};

// Reducer composition
const portfolioApp = combineReducers({
  skill,
  display,
  login,
  portfolio
});

// Reducer Testing
// ==========================================================
// const testToggleSkill = () => {
//   const stateBefore = {
//     skill: {selectedSkill: ''},
//     display: {},
//     login: {},
//     portfolio: {}
//   }
//   const stateAfter = {
//     skill: {selectedSkill: 'React'},
//     display: {},
//     login: {},
//     portfolio: {}
//   }
//
//   const action = {
//     type: 'TOGGLE_SKILL',
//     selectedSkill: 'React'
//   }
//
//   deepFreeze(stateBefore);
//   expect(
//     portfolioApp(stateBefore.skill, action)
//   ).toEqual(stateAfter);
// };
//
// const testTogglePasswordDisplay = () => {
//   const stateBefore = {
//     skill: {},
//     display: { displayPassword: true },
//     login: {},
//     portfolio: {}
//   }
//   const stateAfter = {
//     skill: {},
//     display: { displayPassword: false },
//     login: {},
//     portfolio: {}
//   }
//   const action = { type: 'TOGGLE_PASSWORD' }
//
//   deepFreeze(stateBefore);
//   expect(
//     portfolioApp(stateBefore, action)
//   ).toEqual(stateAfter);
// };
//
// const testUpdateUsername = () => {
//   const stateBefore = {
//     skill: {},
//     display: {},
//     login: {},
//     portfolio: {}
//   }
//   const stateAfter = {
//     skill: {},
//     display: {},
//     login: {
//       credentials: {
//         username: 'bradone'
//       }
//     },
//     portfolio: {}
//   }
//   const action = {
//     type: 'UPDATE_USERNAME',
//     username: 'bradone'
//   }
//
//   deepFreeze(stateBefore);
//   expect(
//     portfolioApp(stateBefore, action)
//   ).toEqual(stateAfter);
// };
//
// const testUpdatePassword = () => {
//   const stateBefore = {
//     skill: {},
//     display: {},
//     login: {
//       credentials: {
//         username: 'bradone',
//         password: 'Password1'
//       }
//     },
//     portfolio: {}
//   }
//   const stateAfter = {
//     skill: {},
//     display: {},
//     login: {
//       credentials: {
//         username: 'bradone',
//         password: 'strongPassW0rd!'
//       }
//     },
//     portfolio: {}
//   }
//   const action = {
//     type: 'UPDATE_PASSWORD',
//     password: 'strongPassW0rd!'
//   }
//
//   deepFreeze(stateBefore);
//   expect(
//     portfolioApp(stateBefore, action)
//   ).toEqual(stateAfter);
// };
//
// testToggleSkill();
// testTogglePasswordDisplay();
// testUpdateUsername();
// testUpdatePassword();
// console.log('All tests passed.');

ReactDOM.render(
  <Provider store={createStore(portfolioApp)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
