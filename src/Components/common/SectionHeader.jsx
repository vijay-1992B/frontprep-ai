const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center  max-w-2xl mx-auto">
      <h2 className=" text-2xl font-medium">{title}</h2>
      <p className="mt-4 text-gray-600">{description}</p>
    </div>
  );
};

export default SectionHeader;
