import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProjectsPage.css';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Navbar from '../../components/Navbar/Navbar';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
async function getProjects() {
    axios.get(`${backendUrl}/projects`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        })
};

function ProjectsPage() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const projectsData = await getProjects();
                console.log(projectsData);
                setProjects(projectsData); 
            } catch (error) {
                console.error("Erro ao buscar projetos:", error);
            }
        }

        fetchProjects();
    }, []); 



    console.log('teste')
    return (
        <div>
            <Navbar />
            <div className="projects-page-container">
                <h1>{backendUrl}</h1>
                <div className="projects-grid">
                    {
                        projects.map((project) => (
                            <ProjectCard
                                projectName={project.name}
                                projectImage={project.image}
                                projectDescription={project.description}
                            />
                        ))
                    }
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
