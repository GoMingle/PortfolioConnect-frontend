import { apiClient } from "./config"

export const apiGetProjects = async() => {
    return apiClient.get("/project" );
};

export const apiGetProjectById  = async (id)=>{
    return apiClient.get(`/project/${id}`);
};

export const apiAddProject = async (payload) => {
    return apiClient.post("/project" , payload);
    };

export const apiUpdateProject = async(id) => {
     return apiClient.patch(`/project/${id}`);
    };

    export const apiDeleteProject = async(id) => {
        return apiClient.delete(`/project/${id}`);
    };