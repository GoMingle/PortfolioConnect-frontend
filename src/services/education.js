export const apiGetEducation = async(payload) =>{
    return apiClient.get("/education" , payload)
}