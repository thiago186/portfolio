import React from 'react';
import './ProjectsPage.css';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Navbar from '../../components/Navbar/Navbar';

function ProjectsPage() {
    return (
        <div>
            <Navbar />
            <div className="projects-page-container">
                <h1>Meus Projetos</h1>
                <div className="projects-grid">
                    <ProjectCard
                        projectName="Meu Projeto 1"
                        projectImage="/logo.png"
                        projectDescription="Descrição breve do meu projeto."
                    />
                    <ProjectCard
                        projectName="Meu Projeto 2"
                        projectImage="/logo.png"
                        projectDescription="Descrição breve do meu projeto."
                    />
                    <ProjectCard
                        projectName="Meu Projeto 3"
                        projectImage="https://th.bing.com/th/id/OIP.Bmrr7MdclV5-eTlbq4fqGgHaE8?rs=1&pid=ImgDetMain"
                        projectDescription="Descrição breve do meu projeto."
                    />
                    {/* Add more ProjectCard components here */}
                </div>
            </div>
        </div>   
    );
}

export default ProjectsPage;
