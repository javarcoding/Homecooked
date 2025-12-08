import api from "../api/axios";

// ====================
// REGISTER API CALL
// ====================
export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// ====================
// LOGIN API CALL
// ====================
export const loginUser = async (loginData) => {
  const response = await api.post("/auth/login", loginData);
  console.log("Login response:", response.data); // check role
  return response.data;
};

