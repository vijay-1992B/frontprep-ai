import Logo from "../common/Logo";
import { sidebarItems } from "../../constants/sidebarItems";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Sidebar = () => {
  const handleSignout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error.code);
    }
  };

  return (
    <div className="  p-8 w-64 flex h-screen flex-col border-r  border-gray-200 bg-gray-50">
      <Logo />
      <ul className="flex-1 flex flex-col gap-4 py-8 ">
        {sidebarItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-md px-3 py-2 ${
                  isActive
                    ? "bg-blue-600 text-white font-medium shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200 "
                }`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <Button className="w-full" onClick={handleSignout}>
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
