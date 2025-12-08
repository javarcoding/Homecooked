import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ChefDashboard from "../pages/chef/ChefDashboard";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import DeliveryDashboard from "../pages/delivery/DeliveryDashboard";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/chef/dashboard" element={<ChefDashboard />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
        <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
