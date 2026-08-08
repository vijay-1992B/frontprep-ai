const LoadingPage = ({ title, message }) => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>

        <p className="mt-2 text-gray-500">{message}</p>
      </div>
    </div>
  );
};

export default LoadingPage;
