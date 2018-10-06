import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
// import expect from 'expect';
// import deepFreeze from 'deep-freeze';

// Reducers
// ==============================================================

const loginManager = (state = {}, action) => {
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
		case 'TOGGLE_PASSWORD':
      return {
        ...state,
        displayPassword: !state.displayPassword
      }
    default:
      return state;
  }
}

const portfolioManager = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_PROJECTS':
      return {
        ...state,
        projects: action.projects
			}
		case 'LOAD_SKILLS':
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

// Reducer composition
// ==============================================================

const portfolioApp = combineReducers({
  loginManager,
  portfolioManager
});

const store = createStore(
	portfolioApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
