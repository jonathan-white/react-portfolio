import React from 'react';
import Social from '../Social/Social';
import './Footer.css';

const Footer = props => (
    <footer className="App-footer">
      <div>
      	<span className="copyright">&copy; 2018 Jonathan White</span>
      	<span className="divider"> | </span>
      	<a href="mailto:jon.white2@gmail.com" target="_blank" rel="noopener noreferrer">jon.white2@gmail.com</a>
      </div>
      <div>
      	<Social />
      </div>
    </footer>
);

export default Footer;