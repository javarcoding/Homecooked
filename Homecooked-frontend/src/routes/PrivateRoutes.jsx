import { Route } from "react-router-dom";
import ProtectedRoute from "../components/Protected/ProtectedRoute";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ChefDashboard from "../pages/chef/ChefDashboard";
import CustomerDashboard from "../pages/customer/CustomerDashboard";
import DeliveryDashboard from "../pages/delivery/DeliveryDashboard";

const PrivateRoutes = () => {
  return (
    <>
      {/* ADMIN Routes */}
      <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Route>

      {/* CHEF Routes */}
      <Route element={<ProtectedRoute allowedRoles={["CHEF"]} />}>
        <Route path="/chef/dashboard" element={<ChefDashboard />} />
      </Route>

      {/* DELIVERY Routes */}
      <Route element={<ProtectedRoute allowedRoles={["DELIVERY"]} />}>
        <Route path="/delivery/dashboard" element={<DeliveryDashboard />} />
      </Route>

      {/* CUSTOMER Routes */}
      <Route element={<ProtectedRoute allowedRoles={["CUSTOMER"]} />}>
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      </Route>
    </>
  );
};

export default PrivateRoutes;
