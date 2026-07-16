const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className=" p-6 border border-gray-200 rounded-xl  shadow-md">
      <div className="text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
