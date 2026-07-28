import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "../App";
import PublicRoutes from "./PublicRotes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: "signup",
        element: (
          <PublicRoutes>
            <Signup />
          </PublicRoutes>
        ),
      },
      {
        path: "forgot-password",
        element: (
          <PublicRoutes>
            <ForgotPassword />
          </PublicRoutes>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
