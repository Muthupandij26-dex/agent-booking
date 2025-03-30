import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Hotels, Login, WorkInProgress, HotelDetails } from "../pages";
import Checkout from "../pages/Checkout";

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
    element: <Hotels />,
  },
  {
    path: "/hotels/:id", // Dynamic route for hotel details
    element: <HotelDetails />,
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
