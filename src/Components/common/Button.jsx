import { Link } from "react-router-dom";

const variants = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-200 text-gray-900",
  danger: "bg-red-600 text-white",
  ghost: "text-gray-700 hover:text-black ",
};

const Button = ({
  children,
  type,
  variant = "primary",
  style,
  path,
  onClick,
  disabled = false,
}) => {
  const className = `${variants[variant] ?? variants.primary} ${style} 
   py-2 px-4 rounded-lg  transition-colors font-medium   ${
     disabled
       ? "cursor-not-allowed opacity-50"
       : "cursor-pointer hover:opacity-90"
   }
`;
  return path ? (
    <Link className={className} to={path}>
      {children}
    </Link>
  ) : (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
