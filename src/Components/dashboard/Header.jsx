import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user.user);
  const name = user?.displayName || "User";

  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-2">
        <div className="text-xl">🧛‍♀️</div>
        <p>Hi {name}</p>
      </div>
    </header>
  );
};

export default Header;
