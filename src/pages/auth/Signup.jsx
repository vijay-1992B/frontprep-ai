import AuthInput from "./AuthInput";
import AuthLayout from "./AuthLayout";
import PasswordInput from "./PasswordInput";
import Button from "../../components/common/Button";
import Divider from "../../components/common/Divider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <AuthLayout>
      <div className="mb-6 text-center">
        <h1 className="font-bold text-2xl">Create Your Account</h1>
        <p className="text-gray-700 mt-2 font-semibold text-sm">
          Start your frontend interview journey
        </p>
      </div>
      <form className="flex flex-col gap-4">
        <AuthInput
          label="Full Name"
          placeholder="Enter your name"
          type="text"
        />
        <AuthInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          id="email"
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          id="password"
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          id="confirmPassword"
        />
        <Button variant="primary">Create Account</Button>
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
        Already have an account?{" "}
        <Link
          className="text-blue-500 font-semibold hover:text-blue-700"
          to="/login"
        >
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
