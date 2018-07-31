import React from 'react';
import './Social.css';

const Social = props => (
    <ul className="social-links">
    	<li className="social-icon">
    		<a href="https://github.com/jonathan-white" target="_blank" rel="noopener noreferrer">
    			<i className="fab fa-github fa-2x"></i>
    		</a>
    	</li>
    	<li className="social-icon">
    		<a href="https://www.linkedin.com/in/jonathanwhite2" target="_blank" rel="noopener noreferrer">
    			<i className="fab fa-linkedin fa-2x"></i>
    		</a>
    	</li>
      <li className="social-icon">
        <a href="mailto:jon.white2@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </li>
    </ul>
);

export default Social;
