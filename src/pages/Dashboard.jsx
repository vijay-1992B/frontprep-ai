import Button from "../Components/common/Button";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  return (
    <div className="p-12 ">
      <div className=" font-bold text-4xl">Dashboard</div>
    </div>
  );
};

export default Dashboard;
