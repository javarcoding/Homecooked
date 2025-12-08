import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ allowedRoles }) {
  const { token, user } = useSelector((state) => state.auth);

  // Not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Role based restriction
  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // Allowed access
  return <Outlet />;
}

export default ProtectedRoute;
