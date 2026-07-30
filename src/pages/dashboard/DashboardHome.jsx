import { useSelector } from "react-redux";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import ActionCard from "../../components/dashboard/ActionCard";

const dashboardStats = [
  {
    id: 1,
    title: "Mock Interviews",
    value: 12,
    icon: "🎤",
  },
  {
    id: 2,
    title: "Average Score",
    value: "84%",
    icon: "📈",
  },
  {
    id: 3,
    title: "Questions Solved",
    value: 156,
    icon: "📚 ",
  },
  {
    id: 4,
    title: "Feedback",
    value: 8,
    icon: "💬 ",
  },
];

const quickActions = [
  {
    id: 1,
    icon: "🎤",
    title: "Start Mock Interview",
    description: "Begin a new AI interview.",
  },
  {
    id: 2,
    icon: "📚",
    title: "Practice Questions",
    description: "Improve specific topics.",
  },
];

const DashboardHome = () => {
  const user = useSelector((store) => store.user.user);
  const name = user?.displayName || "User";

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, {name} 👋</h1>

        <p className="mt-2 text-gray-600">Ready for another interview today?</p>
      </div>
      <div className=" grid grid-cols-4 gap-6 mt-8">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
      <div className="mt-10">
        <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-6">
          {quickActions.map((action) => (
            <ActionCard key={action.id} {...action} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
