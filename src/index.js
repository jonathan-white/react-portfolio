import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

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

const portfolioApp = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_SKILL':
      return skill(state, action);
    default:
      return state;
  }
}

const testToggleSkill = () => {
  const stateBefore = {
    selectedSkill: ''
  }
  const stateAfter = {
    selectedSkill: 'React'
  }

  const action = {
    type: 'TOGGLE_SKILL',
    selectedSkill: 'React'
  }

  deepFreeze(stateBefore);

  expect(
    portfolioApp(stateBefore, action)
  ).toEqual(stateAfter);
};

testToggleSkill();
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
