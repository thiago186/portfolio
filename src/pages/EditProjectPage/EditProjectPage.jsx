import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from '../../components/Navbar/Navbar';

import './EditProjectPage.css'

const backendUrl = import.meta.env.VITE_BACKEND_URL;

async function updateProject(projectId, projectData) {
    return axios.put(`${backendUrl}/projects/${projectId}`, projectData)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        })
}

async function getProject(projectId) {
    return axios.get(`${backendUrl}/projects/${projectId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.error(error);
            throw error;
        })
}

function EditProjectPage() {
    const {projectId} = useParams();
    const [projectData, setProjectData] = useState({});
    
    useEffect(() => {
        async function fetchProject() {
            try {
                const projectData = await getProject(projectId);
                setProjectData(projectData);
            } catch (error) {
                setProjectData({});
            }
        }

        fetchProject();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const updatedProject = await updateProject(projectId, projectData);
            console.log("Projeto Atualizado: ", updatedProject);
            toast("Projeto Atualizado com Sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar projeto: ", error);
            toast("Erro ao atualizar projeto!");
        }
    }

    async function handleChange(event) {
        // event.preventDefault();
        setProjectData({
            ...projectData,
            [event.target.name]: event.target.value
        });
    }
    
    return (
      <div>
        <ToastContainer />
        <Navbar />
        <h1>Editando Projeto: {projectData.project_name}</h1>
        <div className='edit-project-page-container'>
          <form onSubmit={handleSubmit}>
            <div className= 'project-name-container'>
              <label htmlFor="project_name">Nome do Projeto:</label>
              <input
                type="text"
                id="project_name"
                name="project_name"
                value={projectData.project_name}
                onChange={handleChange}
                className='project-name-input'
              />
            </div>
            <div className='image-url-container'>
              <label htmlFor="image_url">URL da Imagem:</label>
              <input
                type="text"
                id="image_url"
                name="image_url"
                value={projectData.image_url}
                onChange={handleChange}
                className='image-url-input'
              />
            </div>
            <div classname='github-url-container'>
              <label htmlFor="github_url">URL do GitHub:</label>
              <input
                type="text"
                id="github_url"
                name="github_url"
                value={projectData.github_url}
                onChange={handleChange}
                className='github-url-input'
              />
            </div>
            <div className='project-description-container'>
              <label htmlFor="project_description">Breve do Projeto:</label>
              <textarea
                id="project_description"
                name="project_description"
                value={projectData.project_description}
                onChange={handleChange}
                className='project-description-input'
              />
            </div>
            <div className='project-markdown-container'>
              <label htmlFor="project_markdown_page">Markdown do Projeto:</label>
              <textarea
                id="project_markdown_page"
                name="project_markdown_page"
                value={projectData.project_markdown_page}
                onChange={handleChange}
                className='project-markdown-input'
              />
            </div>
            <button className='project-submit-button' type="submit">Salvar Alterações</button>
          </form>
        </div>
      </div>
    )
};

export default EditProjectPage;