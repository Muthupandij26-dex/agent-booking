import { JSX } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const flag = localStorage.getItem("flag") === "true"; // Retrieve and check flag

  return flag ? element : <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
