import { apiClient } from "./config"

export const apiGetAchievements = async(payload) =>{
    return apiClient.get("/achievements" , payload)
}

export const apiAddAchievement = async (payload) => {
    return apiClient.post("/achievements" , payload);
    };

    export const apiUpdateAchievement = async(id) => {
        return apiClient.patch(`/achievements/${id}`);
    };

    export const apiDeleteAchievement = async(id) => {
        return apiClient.delete(`/achievements/${id}`);
    };