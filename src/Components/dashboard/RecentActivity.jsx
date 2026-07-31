import ActivityCard from "./ActivityCard";

const recentActivities = [
  {
    id: 1,
    icon: "🎤",
    title: "React Mock Interview",
    description: "Score: 84%",
    time: "2 hours ago",
  },
  {
    id: 2,
    icon: "📚",
    title: "JavaScript Quiz",
    description: "Completed 20 questions",
    time: "Yesterday",
  },
  {
    id: 3,
    icon: "💬",
    title: "AI Feedback",
    description: "Feedback generated",
    time: "3 days ago",
  },
];

const RecentActivity = () => {
  return (
    <section className="mt-10 max-w-2xl rounded-xl border border-gray-200 bg-white shadow-sm">
      <h2 className="px-8 pt-6 pb-4 text-xl font-semibold">Recent Activity</h2>

      <div className="space-y-2 divide-y divide-gray-200">
        {recentActivities.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </section>
  );
};

export default RecentActivity;
