import { apiClient } from "./config"

export const apiGetAchievements = async(payload) =>{
    return apiClient.get("/achievements" , payload)
}