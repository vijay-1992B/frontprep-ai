import Logo from "../../components/common/Logo";

const AuthLayout = ({ children }) => {
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className=" w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <div className="  text-center mb-8">
          <Logo />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
