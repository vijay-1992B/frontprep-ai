const ErrorMessage = ({ message }) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
      <p className="font-medium text-red-700">{message}</p>
    </div>
  );
};

export default ErrorMessage;
