import React from 'react';
import Social from '../Social/Social';
import './Header.css';

const Header = props => (
    <header className="App-header">
      <h1 className="App-title">Jonathan White</h1>
      <p className="App-intro d-none d-md-block">
        I love creating web applications. Please check out my apps below.
      </p>
      <Social />
    </header>
);

export default Header;