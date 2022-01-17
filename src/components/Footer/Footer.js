import React from 'react';
import Social from '../Social';
import './Footer.css';

const Footer = props => (
	<footer className="App-footer">
		<div className="contact-info">
			<a href="mailto:jon.white2@gmail.com" target="_blank" rel="noopener noreferrer">
				<span className="copyright">&copy; 2022 Jonathan White</span>
			</a>
		</div>
		<Social />
	</footer>
);

export default Footer;
