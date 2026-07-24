import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import AuthInput from "./AuthInput";
import { FcGoogle } from "react-icons/fc";
import Divider from "../../components/common/Divider";
import PasswordInput from "./PasswordInput";
import { useState } from "react";
import { validateLogin } from "../../utils/validation";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, firebase: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateLogin(formData);

    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }

    const { email, password } = formData;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        setErrors((prev) => ({
          ...prev,
          firebase: "Invalid email or password.",
        }));
      }
    }
  };

  return (
    <AuthLayout>
      <div className="mb-6 text-center">
        <h1 className="font-bold text-2xl">Welcome Back</h1>
        <p className="text-gray-700 text-sm">
          Continue your interview preparation
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <AuthInput
          type="email"
          label="Email"
          placeholder="Enter your email"
          id="email"
          name="email"
          onChange={handleInputChange}
          value={formData.email}
          error={errors.email}
        />

        <PasswordInput
          label="Password"
          id="password"
          placeholder="Enter your password"
          name="password"
          onChange={handleInputChange}
          value={formData.password}
          error={errors.password}
        />
        {errors.firebase && (
          <p className="text-red-500 text-sm">{errors.firebase}</p>
        )}

        <div className="text-right">
          <Link
            className="text-blue-500 font-semibold hover:text-blue-700"
            to="/forgot-password"
          >
            Forgot Password?
          </Link>
        </div>

        <Button type="submit">Login</Button>
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
