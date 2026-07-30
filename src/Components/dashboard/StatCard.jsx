const StatCard = ({ title, value }) => {
  return (
    <div
      className=" p-6 border border-gray-200 bg-white rounded-xl  shadow-sm hover:shadow-md 
    transition-shadow duration-200"
    >
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="mt-2 text-3xl font-bold">{value}</h2>
    </div>
  );
};

export default StatCard;
