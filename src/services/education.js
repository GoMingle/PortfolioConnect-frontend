import { apiClient } from "./config";

export const apiGetEducation = async(payload) =>{
    return apiClient.get("/education" , payload)
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