import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        } catch (error) {
            console.error("Erro ao atualizar projeto: ", error);
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
      <h1>Editando Projeto: {projectData.project_name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="project_name">Nome do Projeto:</label>
          <input
            type="text"
            id="project_name"
            name="project_name"
            value={projectData.project_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image_url">URL da Imagem:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={projectData.image_url}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="github_url">URL do GitHub:</label>
          <input
            type="text"
            id="github_url"
            name="github_url"
            value={projectData.github_url}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="project_description">Descrição do Projeto:</label>
          <textarea
            id="project_description"
            name="project_description"
            value={projectData.project_description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
    )
};

export default EditProjectPage;