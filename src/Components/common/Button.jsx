import { Link } from "react-router-dom";

const variants = {
  primary: "bg-blue-600 text-white",
  secondary: "bg-gray-200 text-gray-900",
  danger: "bg-red-600 text-white",
  ghost: "text-gray-700 hover:text-black ",
};

const Button = ({ children, variant = "primary", style, path }) => {
  const className = `${variants[variant] ?? variants.primary} ${style} py-2 px-4 rounded-lg cursor-pointer transition-colors font-medium`;
  return path ? (
    <Link className={className} to={path}>
      {children}
    </Link>
  ) : (
    <button className={className}>{children}</button>
  );
};

export default Button;
