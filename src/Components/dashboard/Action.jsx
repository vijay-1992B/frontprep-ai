import ActionCard from "./ActionCard";

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

const Action = () => {
  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-semibold">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-6">
        {quickActions.map((action) => (
          <ActionCard key={action.id} {...action} />
        ))}
      </div>
    </section>
  );
};

export default Action;
