import { apiClient } from "./config";

export const apiAdduserProfile = async (payload) => {
  return apiClient.post("/userProfile", payload);
};

export const apiGetuserProfile = async () => {
  return apiClient.get("/userProfile");
};

export const apiUpdateuserProfile = async (id, payload) => {
  return apiClient.patch(`/userProfile/${id}`, payload);
};