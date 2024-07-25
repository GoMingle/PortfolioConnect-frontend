import { apiClient } from "./config";

export const apiGetVolunteering = () =>{
    return apiClient.get("/volunteering", );
};

export const apiAddVolunteering = async (payload) => {
    return apiClient.post("/volunteering" , payload);
    };


    export const apiUpdateVolunteering = async (id, payload) => {
        return apiClient.patch(`/volunteering/${id}`, payload);
      };
    
    
    export const apiDeleteVolunteering = async(id) => {
        return apiClient.delete(`/volunteering/${id}`);
    };