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
                setProjects(false);
            }
        }

        fetchProjects();
    }, []); 


    if (projects != false){
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
                                    projectId={project._id}
                                    projectName={project.project_name}
                                    projectImage={project.image_url}
                                    projectDescription={project.project_description}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <Navbar />
                <div className="projects-page-container">
                    <h1>Error</h1>
                    <p>Desculpe, houve um erro ao recuperar os projetos. Volte novamente mais tarde.</p>
                </div>
            </div>
        )
    }


}

export default ProjectsPage;
