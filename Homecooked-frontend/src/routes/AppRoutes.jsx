import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Unauthorized from "../pages/Unauthorized";
import PrivateRoutes from "./PrivateRoutes";
import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (

    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Private Routes */}
      <Route element={<MainLayout />}>
        {PrivateRoutes()}
      </Route>

    </Routes>
  )
}

export default AppRoutes;
