import { apiClient } from "./config"

export const apiGetProject = async(payload) => {
    return apiClient.get("/project" , payload);
};

export const apiGetProjectById  = async (id)=>{
    return apiClient.get(`/project/${id}`);
};