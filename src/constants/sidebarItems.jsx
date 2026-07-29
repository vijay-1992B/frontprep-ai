import {
  LuLayoutDashboard,
  LuMic,
  LuChartColumn,
  LuUser,
  LuLogOut,
} from "react-icons/lu";

export const sidebarItems = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
    icon: <LuLayoutDashboard />,
  },
  {
    id: 2,
    label: "Mock Interview",
    path: "/dashboard/mock-interview",
    icon: <LuMic />,
  },
  {
    id: 3,
    label: "Feedback",
    path: "/dashboard/feedback",
    icon: <LuChartColumn />,
  },
  {
    id: 4,
    label: "Profile",
    path: "/dashboard/profile",
    icon: <LuUser />,
  },
];
