import { apiClient } from "./config";


export const apiGetExperiences = () => {
    return apiClient.get("/experiences");
   };

 export const apiAddExperience = async (payload) => {
    return apiClient.post("/experiences" , payload);
    };

    export const apiUpdateExperience = async(id) => {
        return apiClient.patch(`/experiences/${id}`);
    };

    export const apiDeleteExperience = async(id) => {
        return apiClient.delete(`/experiences/${id}`);
    };