import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectCard from '../../ProjectCard/';
import * as routePaths from '../../../utils/routePaths';
import stateKeys from "../../../utils/stateKeys";
import actions from "../../../utils/actions";
import './About.css';

// To be removed
import skills from '../../../constants/skills.json';

const mapStateToAboutProps = (state) => stateKeys(state);
const mapDispatchToAboutProps = (dispatch) => actions(dispatch);

class About extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			selectedSkill: null
		};

		this.setSkill = this.setSkill.bind(this);
	};

	setSkill(selectedSkill){
		this.setState({ selectedSkill });
	};

	render(){
		const { selectedSkill } = this.state;
		const { projects } = this.props;
		return(
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
								<button key={s.skill}	className="skill-icon" data-title={s.hoverText}
									onClick={() => this.setSkill(s.skill)}
								>
									<img style={{width: '100%'}} src={s.image} alt={s.skill} />
								</button>
							))
						}
					</div>
					{skills.map(s =>
						(s.skill === selectedSkill) ?
							(<div key={s.skill} className="skill-info">
								<p>{s.info.para1}</p>
								<p>{s.info.para2}</p>
							</div>) : (<p key={s.skill}></p>)
					)}
				</div>
				<div className="about-projects">
					<h3>Projects</h3>
					<div className="row porfolio-wrapper">
					{projects && projects
						.filter(p => p.feature === true)
						// .sort((a,b) => (a.order-b.order))
						.map(project =>
							<ProjectCard key={project._id}	{...project}
								classes={	project.technologies.includes(selectedSkill) 
									? 'highlight' 
									: (selectedSkill ? 'dim' : '')	
								}
							/>
						)}
					</div>
					<div className="link-to-more">
						<Link className="btn btn-primary" to={routePaths.PORTFOLIO} component={'Portfolio'}>
							View More
						</Link>
					</div>
				</div>
			</section>
		)
	}
};

const AboutPage = connect(
	mapStateToAboutProps,
	mapDispatchToAboutProps
)(About);

export default AboutPage;