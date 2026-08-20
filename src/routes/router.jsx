import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ProtectedRoutes from "./ProtectedRoutes";
import App from "../App";
import PublicRoutes from "./PublicRotes";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Profile from "../pages/dashboard/Profile";
import MockInterview from "../pages/dashboard/MockInterview";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import InterviewSession from "../pages/dashboard/InterviewSession";
import InterviewFeedback from "../pages/dashboard/InterviewFeedback";
import InterviewHistory from "../pages/dashboard/InterviewHistory";

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
            <DashboardLayout />
          </ProtectedRoutes>
        ),
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "interview-feedback",
            element: <InterviewFeedback />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "interview-history",
            element: <InterviewHistory />,
          },
          {
            path: "mock-interview",
            children: [
              {
                index: true,
                element: <MockInterview />,
              },
              {
                path: "session",
                element: <InterviewSession />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
