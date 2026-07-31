import StatCard from "./StatCard";

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

const Stats = () => {
  return (
    <section className=" grid grid-cols-4 gap-6 mt-8">
      {dashboardStats.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </section>
  );
};

export default Stats;
