import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({ children }) => {
  const user = useSelector((store) => store.user.user);
  const loading = useSelector((store) => store.user.loading);

  return loading ? (
    <h1 className="font-bold text-center p-12 text-4xl">Loading...</h1>
  ) : user ? (
    <Navigate to="/dashboard" />
  ) : (
    children
  );
};

export default PublicRoutes;
