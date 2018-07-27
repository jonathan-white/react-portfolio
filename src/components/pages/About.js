import React from "react";
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';
import portfolios from '../../portfolios.json';
import './About.css';
import skills from '../../skills.json';

const About = () => (
  <section className="container about-page">
    <h1 className="intro-line">Hi, I'm Jonathan...</h1>
    <div className="about-bio">
      <div className="about-photo">
        <img id="profile-pic" src="/assets/images/pic1.jpeg" alt="Jonathan White"/>
      </div>
      <div>
        <p className="bio">I'm a freelance full-stack web developer with a love for all things tech.
          JavaScript is like a second language for me and I enjoy building fun and creative
        apps for the web.</p>
      </div>
    </div>
    <div className="about-skills">
      <h3>Skills</h3>
      <div className="skillset-1">
        {
          skills.map(s => (
            <span className="skill-icon">
              <img
                key={s.skill}
                className=""
                style={{width: '20%', margin: '10px 5px'}}
                src={s.image}
                title={s.skill}
                alt={s.skill} />
            </span>
          ))
        }
      </div>
    </div>
    <div className="about-projects">
      <h3>Projects</h3>
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
