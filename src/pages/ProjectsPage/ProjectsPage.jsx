import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ProjectsPage.css';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Navbar from '../../components/Navbar/Navbar';

const backendUrl = import.meta.env.VITE_BACKEND_URL;
async function getProjects() {
    return axios.get(`${backendUrl}/projects`)
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
                        projects.map((project, index) => (
                            <ProjectCard
                                key={project._id}
                                projectName={project.name}
                                projectImage={project.image_url}
                                projectDescription={project.project_description}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;
