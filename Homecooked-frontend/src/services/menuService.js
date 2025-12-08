import api from "../api/axios";

// ============================
// GET FEATURED MEALS
// ============================
export const fetchFeaturedMeals = async () => {
  const response = await api.get("/menus/featured");
  return response.data;
};
