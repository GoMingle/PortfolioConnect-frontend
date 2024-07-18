import { apiClient } from "./config";

export const apiGetVolunteering = (payload) =>{
    return apiClient.get("/volunteering", payload);
};

export const apiAddVolunteering = async (payload) => {
    return apiClient.post("/volunteering" , payload);
    };

 export const apiUpdateVolunteering = async(id) => {
    return apiClient.patch(`/volunteering/${id}`);
    }; 
    
    export const apiDeleteVolunteering = async(id) => {
        return apiClient.delete(`/volunteering/${id}`);
    };