const ActivityCard = ({ icon, title, description, time }) => {
  return (
    <div className="flex flex-col gap-2 px-6 py-5 transition-colors hover:bg-gray-50 cursor-pointer">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <span className="text-xl">{icon}</span>
          <h3 className="font-semibold">{title}</h3>
        </div>
        <time className="text-xs text-gray-500">{time}</time>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ActivityCard;
