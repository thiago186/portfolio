import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';


import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Navbar from '../../components/Navbar/Navbar';
import './SingleProjectPage.css';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function getProject(projectId) {
    // console.log("url is: ", `${backendUrl}/projects/${projectId}`)
    return axios.get(`${backendUrl}/projects/${projectId}`)
        .then((response) => {
            // console.log("got response: ", response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        })
}

function SingleProjectPage() {
    const {projectId} = useParams();
    const [project, setProject] = useState({});

    console.log('projectId: ', projectId);
    useEffect(() => {
        async function fetchProject() {
            try {
                const projectData = await getProject(projectId);
                setProject(projectData);
            } catch (error) {
                setProject({});
            }
        }

        fetchProject();
    }, []);

    if (Object.keys(project).length > 0) {
    return(
        <div>
            <Navbar />
            <div className="single-project-page-container"> 
                <div className="project-image-container">
                    <img src={project.image_url} alt={`Projeto: ${project.name}`} className="project-image"/>
                </div>
                <div className="project-info">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-description">{project.project_description}</p>
                    <button className="project-button">Ver Projeto</button>
                </div>
            </div>
        </div>
    
    );
    } 
    else {
        // return <Navigate to='/404'/>;
        return <p>Project not found</p>;
    }
}

export default SingleProjectPage;