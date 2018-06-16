import React from 'react';
import './Project.css';

const Project = props => {
	return(
		<div className="card project-item text-left">
			<div className="card-header project-header">
				<div className="project-image">
					<a href={props.live_url ? props.live_url : props.code_url} target="_blank" rel="noopener noreferrer">
						<img className="project-image" src={props.image} alt={props.title}/>
					</a>
				</div>
				<div className="project-title">
					<h3>{props.title}</h3>
				</div>
			</div>
			<div className="card-body project-body">
				<div className="project-desc">
					{props.description}
				</div>
				<div className="row project-details">
					<div className="col-lg-8 detail-info">
						<div>
							<span className="project-detail-label">Technologies Used:</span> 
							{props.technologies.map((item, i, arr) => (
								i < arr.length-1 ? <span className="project-tct" key={i}>{item}, </span> : <span className="project-tct" key={i}>{item}</span>
							))}
						</div>
						<div>
							<span className="project-detail-label">Categories:</span> 
							{props.categories.map((item, i, arr) => (
								i < arr.length-1 ? <span className="project-tct" key={i}>{item}, </span> : <span className="project-tct" key={i}>{item}</span>
							))}
						</div>
						<div>
							<span className="project-detail-label">Tags:</span> 
							{props.tags.map((item, i, arr) => (
								i < arr.length-1 ? <span className="project-tct" key={i}>{item}, </span> : <span className="project-tct" key={i}>{item}</span>
							))}
						</div>
					</div>
					<div className="col-lg-4 detail-links">
						{props.live_url && 
							<div><a href={props.live_url} target="_blank" rel="noopener noreferrer">View Site</a></div>
						}
						<div><a href={props.code_url} target="_blank" rel="noopener noreferrer">Github</a></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;