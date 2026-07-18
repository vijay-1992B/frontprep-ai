import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const PasswordInput = ({ label, placeholder, value, id, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleButtonClick = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <label htmlFor={id} className="block mb-2 font-medium">
        {label}
      </label>
      <div
        className="flex border px-3 py-2 items-center justify-between 
         w-full transition rounded-md focus-within:ring-2
       focus-within:border-blue-500 focus-within:ring-blue-500  "
      >
        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          className=" w-full border-none outline-none  
            "
        />
        <button
          className="cursor-pointer shrink-0 ml-2"
          type="button"
          onClick={handleButtonClick}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <LuEyeOff /> : <LuEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
