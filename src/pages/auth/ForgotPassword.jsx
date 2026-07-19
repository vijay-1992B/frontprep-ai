import AuthInput from "./AuthInput";
import AuthLayout from "./AuthLayout";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <div className="mb-6 text-center">
        <h1>Forgot Password?</h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter your email address and we'll send you a password reset link.
        </p>
      </div>
      <form className="flex flex-col gap-4">
        <AuthInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          id="email"
        />
        <Button>Reset Password</Button>
      </form>
      <p className="mt-6 text-center">
        Remember your password?{" "}
        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          Sign In
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;
