const Divider = ({ text = "OR" }) => {
  return (
    <div className="flex items-center mt-6 mb-3">
      <hr className="flex-1 border-gray-400" />

      <span className="mx-4 text-xs text-gray-500">{text}</span>

      <hr className="flex-1 border-gray-400" />
    </div>
  );
};

export default Divider;
