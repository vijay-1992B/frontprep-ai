import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen ">
      <Sidebar />
      <div className="flex flex-1 flex-col ">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
