import React from 'react';
import './ProjectCard.css';

const ProjectCard = props => {
	return(
		<div className={`project-item ${props.classes}`}>
			<a href={props.live_url ? props.live_url : props.code_url} target="_blank" rel="noopener noreferrer">
				<div className="project-image">
					<img className="project-image" src={props.image} alt={props.title}/>
				</div>
				<div className="project-details">
					<h3 className="project-title">{props.title}</h3>
					<div>{props.description}</div>
				</div>
			</a>
			<div className="links">
				{props.live_url &&
					<div className="site-link">
						<a href={props.live_url} target="_blank" rel="noopener noreferrer">
							<i className="fas fa-link"></i>
							<div className="desc">View Site</div>
						</a>
					</div>
				}
				<div className="code-link">
					<a href={props.code_url} target="_blank" rel="noopener noreferrer">
						<i className="fab fa-github fa-2x"></i>
						<div className="desc">View Code</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
