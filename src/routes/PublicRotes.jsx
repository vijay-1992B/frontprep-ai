import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const user = useSelector((store) => store.user);

  return user ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoutes;
