import React from "react";
import { Link } from 'react-router-dom';
import Project from '../Project/Project';
import portfolios from '../../portfolios.json';

const About = () => (
<section className="container about-page">
  <h1>Hi, I'm Jonathan...</h1>
  <div className="about-head">
    <div className="about-photo">
      <img id="profile-pic" src="/assets/images/pic1.jpeg" alt="Jonathan White"/>
    </div>
    <div>
      <p className="bio">I'm a freelance full-stack web developer with a love for all things tech. 
      JavaScript is a second language for me and I enjoy building fun and creative 
      apps for the web.</p>
      <div className="skills">
        <div className="skillset-1">
          <p>I have experience working with the following web technologies:</p>
          <ul>
            <li>Node.js</li>
            <li>React</li>
            <li>JavaScript (ES5 & ES6)</li>
            <li>jQuery</li>
            <li>MySQL (with Sequelize)</li>
            <li>MongoDB (with Mongoose)</li>
            <li>Microsoft SQL Server</li>
            <li>Bootstrap</li>
            <li>Materialize CSS</li>
          </ul> 
        </div>
        <div className="skillset-2">
          <p>...as well as with these:</p>
          <ul>
            <li>Office 365 SharePoint</li>
            <li>Microsoft Access</li>
            <li>Visual Basic for Applications</li>
            <li>Java</li>
          </ul> 
        </div>
      </div>
    </div>
  </div>
  <div className="featured-section">
    <p className="featured">Below are a few projects I've worked on. <Link to={`/my-work`} component={'Portfolio'}>Click here to view more.</Link></p>
    <div className="row porfolio-wrapper">
      {portfolios.filter(p => p.feature === 1)
          .sort((a,b) => (a.order-b.order))
          .map(project => (
        <Project 
          key={project.id}
          {...project}
        />
        )
      )}
    </div>
    <Link className="btn btn-primary" to={`/my-work`} component={'Portfolio'}>
      View More
    </Link>
  </div>
</section>
);

export default About;
