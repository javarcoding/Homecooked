import api from "../api/axios";

// ============================
// GET ALL CHEFS
// ============================
export const fetchAllChefs = async () => {
  const response = await api.get("/chefs");
  return response.data;
};
