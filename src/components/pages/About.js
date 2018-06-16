import React from "react";
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
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
            <li><span className="skill">Node.js</span></li>
            <li><span className="skill">React</span></li>
            <li><span className="skill">JavaScript (ES5 & ES6)</span></li>
            <li><span className="skill">jQuery</span></li>
            <li><span className="skill">MySQL (with Sequelize)</span></li>
            <li><span className="skill">MongoDB (with Mongoose)</span></li>
            <li><span className="skill">Microsoft SQL Server</span></li>
            <li><span className="skill">Bootstrap</span></li>
            <li><span className="skill">Materialize CSS</span></li>
          </ul> 
        </div>
        <div className="skillset-2">
          <p>...as well as with these:</p>
          <ul>
            <li><span className="skill">Office 365 SharePoint</span></li>
            <li><span className="skill">Microsoft Access</span></li>
            <li><span className="skill">Visual Basic for Applications</span></li>
            <li><span className="skill">Java</span></li>
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
        <ProjectCard 
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
