import React from 'react';
import Social from '../Social/Social';
import './Footer.css';

const Footer = props => (
    <footer className="App-footer">
      <p>&copy; 2018 Jonathan White</p>
      <div>
      	<Social />
      </div>
    </footer>
);

export default Footer;