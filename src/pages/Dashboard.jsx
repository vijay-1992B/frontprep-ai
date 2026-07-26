import Button from "../Components/common/Button";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-12 flex justify-between ">
      <div className=" font-bold text-4xl">Dashboard</div>
      <Button onClick={handleClick}>Logout</Button>
    </div>
  );
};

export default Dashboard;
