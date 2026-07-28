import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const user = useSelector((store) => store.user.user);
  const loading = useSelector((store) => store.user.loading);

  return loading ? (
    <h1 className="font-bold text-center text-4xl p-12">Loading...</h1>
  ) : user ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
