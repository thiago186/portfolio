import React from 'react';
import { useNavigate } from 'react-router-dom';


import './ProjectCard.css';


function ProjectCard({projectId, projectName, projectImage, projectDescription }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(`Navegando para o projeto: ${projectName}: ${projectId}`);
    navigate(`/projects/${projectId}`);    
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      <div className="project-card-image-container">
        <img src={projectImage} alt={`Projeto: ${projectName}`} className="project-card-image" />
      </div>
      <div className="project-card-info">
        <h3 className="project-card-title">{projectName}</h3>
        <p className="project-card-description">{projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
