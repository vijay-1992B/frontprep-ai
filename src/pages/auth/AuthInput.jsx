const AuthInput = ({
  label,
  type,
  placeholder,
  value,
  id,
  onChange,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border px-3 py-2 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    </div>
  );
};

export default AuthInput;
