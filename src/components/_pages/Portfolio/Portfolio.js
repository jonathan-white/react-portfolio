import React from "react";
import ProjectCard from '../../ProjectCard/';
import portfolios from '../../../constants/portfolios.json';
import './Portfolio.css';

const Portfolio = () => (
  <section className="container portfolio-page">
    <h3>Projects</h3>
    <div className="row porfolio-wrapper">
      {portfolios && portfolios
        .filter(p => p.showcase === 1)
        .sort((a,b) => (a.order-b.order))
        .map(project => <ProjectCard key={project.id} {...project} />)
      }
    </div>
  </section>
);

export default Portfolio;
