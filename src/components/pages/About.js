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
      <h3 className="mobile-intro-line">I'm Jonathan</h3>
      <div className="bio-photo">
        <img id="profile-pic" src="/assets/images/pic1.jpeg" alt="Jonathan White"/>
      </div>
      <div className="bio-text">
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
            <button key={s.skill} className="skill-icon" data-title={s.title}>
              <img
                className=""
                style={{width: '100%'}}
                src={s.image}
                alt={s.skill} />
            </button>
          ))
        }
      </div>
    </div>
    <div className="about-projects">
      <h3>Projects</h3>
      <div className="row porfolio-wrapper">
        {portfolios.filter(p => p.feature === 1)
          .sort((a,b) => (a.order-b.order))
          .map(project =>
            <ProjectCard
              key={project.id}
              {...project}
            />
          )}
      </div>
      <div className="link-to-more">
        <Link className="btn btn-primary" to={`/my-work`} component={'Portfolio'}>
          View More
        </Link>
      </div>
    </div>
  </section>
);

export default About;
