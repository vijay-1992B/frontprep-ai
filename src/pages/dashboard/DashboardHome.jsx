import Welcome from "../../components/dashboard/Welcome";
import Stats from "../../components/dashboard/Stats";
import Action from "../../components/dashboard/Action";
import RecentActivity from "../../components/dashboard/RecentActivity";

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <Welcome />
      <Stats />
      <Action />
      <RecentActivity />
    </div>
  );
};

export default DashboardHome;
