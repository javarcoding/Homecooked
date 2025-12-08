import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Unauthorized from "../pages/Unauthorized";
import PrivateRoutes from "./PrivateRoutes";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import TestMeals from "../pages/TestMeals";
import ChefList from "../pages/public/ChefList";

function AppRoutes() {
  return (

    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/test-meals" element={<TestMeals />} />
      <Route path="/chefs" element={<ChefList />} />

      {/* Private Routes */}
      <Route element={<MainLayout />}>
        {PrivateRoutes()}
      </Route>

    </Routes>
  )
}

export default AppRoutes;
