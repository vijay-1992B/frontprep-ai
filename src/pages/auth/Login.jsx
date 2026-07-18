import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import AuthInput from "./AuthInput";
import { FcGoogle } from "react-icons/fc";
import Divider from "../../components/common/Divider";
import PasswordInput from "./PasswordInput";

const Login = () => {
  return (
    <AuthLayout>
      <div className="mb-6 text-center">
        <h1 className="font-bold text-2xl">Welcome Back</h1>
        <p className="text-gray-700 text-sm">
          Continue your interview preparation
        </p>
      </div>
      <form className="flex flex-col gap-4 ">
        <AuthInput
          type="email"
          label="Email"
          placeholder="Enter your email"
          id="email"
        />

        <PasswordInput
          label="Password"
          id="password"
          placeholder="Enter your password"
        />

        <div className="text-right">
          <Link
            className="text-blue-500 font-semibold hover:text-blue-700"
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>

        <Button>Login</Button>
      </form>
      <Divider />
      <Button
        variant="secondary"
        style="flex items-center justify-center gap-2  mb-6 w-full"
      >
        <FcGoogle className="text-3xl" />
        <span className="text-md font-semibold text-gray-700">
          Continue with Google
        </span>
      </Button>
      <p className="text-center ">
        Don't have an account?{" "}
        <Link
          className="text-blue-500 font-semibold hover:text-blue-700"
          to="/signup"
        >
          Create Account
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
