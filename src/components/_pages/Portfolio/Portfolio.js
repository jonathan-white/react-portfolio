import React from "react";
import { connect } from "react-redux";
import ProjectCard from '../../ProjectCard/';
import stateKeys from "../../../utils/stateKeys";
import './Portfolio.css';

const mapStateToPortfolioProps = (state) => stateKeys(state);

const Portfolio = (props) => (
  <section className="container portfolio-page">
    <h3>Projects</h3>
    <div className="row porfolio-wrapper">
      {props.projects && props.projects
        .sort((a,b) => (b.id-a.id))
        .map(project => <ProjectCard key={project._id} {...project} />)
      }
    </div>
  </section>
);

const PortfolioPage = connect(mapStateToPortfolioProps)(Portfolio);

export default PortfolioPage;
