import { Link } from "react-router-dom";
import Button from "../common/Button";

const links = [
  { name: "Home", url: "/home" },
  { name: "Features", url: "/features" },
  { name: "Pricing", url: "/pricing" },
];

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50 shadow-sm h-20 ">
      <div className=" max-w-7xl mx-auto p-4  flex justify-between items-center ">
        <h1 className="font-bold text-2xl">FrontPrep AI</h1>
        <ul className="flex gap-10 ">
          {links.map((link) => (
            <li key={link.url}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-4 ">
          <Button variant="ghost" path="/login">
            Login
          </Button>
          <Button>Start Free Interview</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
