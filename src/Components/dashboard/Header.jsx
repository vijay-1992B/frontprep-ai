import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user.user);
  const name = user?.displayName || "User";

  return (
    <div className="flex justify-between items-center p-6">
      <h1 className="font-semibold text-xl">Dashboard</h1>
      <div className="flex gap-0.5 items-center">
        <div className="text-xl">🧛‍♀️</div>
        <p>{`Hi ${name}`}</p>
      </div>
    </div>
  );
};

export default Header;
