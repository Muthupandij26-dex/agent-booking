import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { UseAuth } from "../hooks";

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isKycCompleted } = UseAuth();

  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     // navigate("/");
  //   }
  // }, [isAuthenticated, navigate]);

  // const flag = localStorage.getItem("flag") === "true";

  const kycCompleted = isKycCompleted();

  return kycCompleted ? element : <Navigate to="/kycDetails" replace />;
};

export default ProtectedRoute;
