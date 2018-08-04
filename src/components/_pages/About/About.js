import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ProjectCard from '../../ProjectCard/';
import portfolios from '../../../constants/portfolios.json';
import './About.css';
import skills from '../../../constants/skills.json';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkill: ''
    }
  }

  handleOnClick = (skill) => {
    if(!this.state.selectedSkill) {
      this.setState({ selectedSkill: skill });
    } else {
      // this.setState({ selectedSkill: '' });
    }
  }

  handleOnBlur = () => {
    this.setState({
      selectedSkill: ''
    });
  }

  render() {
    return (
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
                <button
                  key={s.skill}
                  className="skill-icon"
                  data-title={s.hoverText}
                  onClick={() => this.handleOnClick(s.skill)}
                  onBlur={() => this.handleOnBlur()}
                >
                  <img
                    className=""
                    style={{width: '100%'}}
                    src={s.image}
                    alt={s.skill} />
                </button>
              ))
            }
          </div>
          {skills.map(s =>
            (s.skill === this.state.selectedSkill) ?
              (<div className="skill-info">
                <p>{s.info.para1}</p>
                <p>{s.info.para2}</p>
              </div>) : (<p></p>)
          )}
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
                  classes={
                    project.technologies.includes(this.state.selectedSkill) ?
                    'highlight' : (this.state.selectedSkill ? 'dim' : '')
                  }
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
    )
  }
};

export default About;
