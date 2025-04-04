import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Hotels, Login, WorkInProgress } from "../pages";
import Checkout from "../pages/Checkout";
import RoomCategories from "../pages/RoomCategories";
import { ProtectedRoute } from "../components";
import KycPage from "../pages/kyc/KycPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/hotels",
    element: <ProtectedRoute element={<Hotels />} />,
  },
  {
    path: "/kycDetails",
    element: <KycPage />,
  },
  // {
  //   path: "/hotels/:id", // Dynamic route for hotel details
  //   element: <HotelDetails />,
  // },
  {
    path: "/roomCategories",
    element: <ProtectedRoute element={<RoomCategories />} />,
  },
  {
    path: "/unauthorized",
    element: <WorkInProgress />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "*",
    element: <WorkInProgress />,
  },
]);

const RouterApp = () => {
  return <RouterProvider router={router} />;
};

export default RouterApp;
