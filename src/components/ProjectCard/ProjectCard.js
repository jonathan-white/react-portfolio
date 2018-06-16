import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => {
	return(
		<div className="project-item text-left">
			<a href={props.live_url ? props.live_url : props.code_url} target="_blank" rel="noopener noreferrer">
				<div className="project-image">
					<img className="project-image" src={props.image} alt={props.title}/>
				</div>
			</a>
			<div className="project-details">
				<h3 className="project-title">{props.title}</h3>
				<div>{props.description}</div>
			</div>
			<div className="links">
				<div className="site-link">
					<a href={props.live_url} target="_blank" rel="noopener noreferrer">
						<i class="fas fa-link"></i>
						<div className="desc">View Site</div>
					</a>
				</div>
				<div className="code-link">
					<a href={props.code_url} target="_blank" rel="noopener noreferrer">
						<i class="fab fa-github fa-2x"></i>
						<div className="desc">View Code</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;