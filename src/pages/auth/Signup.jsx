import AuthInput from "./AuthInput";
import AuthLayout from "./AuthLayout";
import PasswordInput from "./PasswordInput";
import Button from "../../components/common/Button";
import Divider from "../../components/common/Divider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { validateSignup } from "../../utils/validation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateSignup(formData);

    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }

    const { email, password, fullName } = formData;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: fullName,
      });
      navigate("/dashboard");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        setErrors({ email: "An account with this email already exists." });
      }
    }
  };

  return (
    <AuthLayout>
      <div className="mb-6 text-center">
        <h1 className="font-bold text-2xl">Create Your Account</h1>
        <p className="text-gray-700 mt-2 font-semibold text-sm">
          Start your frontend interview journey
        </p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <AuthInput
          label="Full Name"
          placeholder="Enter your name"
          type="text"
          onChange={handleInputChange}
          name="fullName"
          value={formData.fullName}
          error={errors.fullName}
        />
        <AuthInput
          label="Email"
          placeholder="Enter your email"
          type="email"
          id="email"
          name="email"
          onChange={handleInputChange}
          value={formData.email}
          error={errors.email}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          id="password"
          name="password"
          onChange={handleInputChange}
          value={formData.password}
          error={errors.password}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm your password"
          id="confirmPassword"
          name="confirmPassword"
          onChange={handleInputChange}
          value={formData.confirmPassword}
          error={errors.confirmPassword}
        />
        <Button type="submit" variant="primary">
          Create Account
        </Button>
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
