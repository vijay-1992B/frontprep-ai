import Button from "../../components/common/Button";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Dashboard = () => {
  return <DashboardLayout />;
};

export default Dashboard;
