import { useSelector } from "react-redux";

const Welcome = () => {
  const user = useSelector((store) => store.user.user);
  const name = user?.displayName || "User";
  return (
    <section>
      <h1 className="text-3xl font-bold">Welcome back, {name} 👋</h1>

      <p className="mt-2 text-gray-600">Ready for another interview today?</p>
    </section>
  );
};

export default Welcome;
