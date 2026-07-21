const AuthInput = ({
  label,
  type,
  placeholder,
  value,
  id,
  onChange,
  error,

  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-medium">
        {label}
      </label>
      <input
        {...props}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-md border px-3 py-2 outline-none transition
         ${
           error
             ? "border-red-500 focus:ring-red-500 focus:border-red-500"
             : "focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
         }`}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  );
};

export default AuthInput;
