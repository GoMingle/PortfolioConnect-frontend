import { apiClient } from "./config";

export const apiGetEducation = async() =>{
    return apiClient.get("/education")
}

export const apiAddEducation = async (payload) => {
    return apiClient.post("/education" , payload);
    };

    export const apiUpdateEducation = async(id) => {
        return apiClient.patch(`/education/${id}`);
    };

    export const apiDeleteEducation = async(id) => {
        return apiClient.delete(`/education/${id}`);
    };