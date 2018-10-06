import React from "react";
import { connect } from "react-redux";
import ProjectCard from '../../ProjectCard/';
import stateKeys from "../../../utils/stateKeys";
import './Portfolio.css';

// To be removed
import portfolios from '../../../constants/portfolios.json';

const mapStateToPortfolioProps = (state) => stateKeys(state);

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

const PortfolioPage = connect(mapStateToPortfolioProps)(Portfolio);

export default PortfolioPage;
