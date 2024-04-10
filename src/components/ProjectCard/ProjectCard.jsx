import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ProjectCard.css'; // Importando o arquivo CSS


function ProjectCard({projectId, projectName, projectImage, projectDescription }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log(`Navegando para o projeto: ${projectName}: ${projectId}`);
    navigate(`/projects/${projectId}`);    
  };

  return (
    <div className="project-card" onClick={handleCardClick}>
      <div className="project-image-container">
        <img src={projectImage} alt={`Projeto: ${projectName}`} className="project-image" />
      </div>
      <div className="project-info">
        <h3 className="project-title">{projectName}</h3>
        <p className="project-description">{projectDescription}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
