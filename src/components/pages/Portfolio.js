import React from "react";
import ProjectCard from '../ProjectCard/ProjectCard';
import portfolios from '../../portfolios.json';

const Portfolio = () => (
<section className="container">
  <h1>Some Projects I've Worked On...</h1>
  <div className="row porfolio-wrapper">
    {portfolios.filter(p => p.showcase === 1).sort((a,b) => (a.order-b.order)).map(project => (
      <ProjectCard 
        key={project.id}
        {...project}
      />
      )
    )}
  </div>
</section>
);

export default Portfolio;
