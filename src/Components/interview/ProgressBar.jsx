const ProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-medium">Progress</p>

        <span className="text-sm text-gray-500">
          {current} / {total}
        </span>
      </div>

      <div className="h-2 w-full rounded-full bg-gray-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
