import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex";

export const validateLogin = ({ email, password }) => {
  const errors = {};

  const isEmailValid = EMAIL_REGEX.test(email);

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!isEmailValid) {
    errors.email = "Email is not valid";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  }

  return errors;
};

export const validateSignup = ({
  email,
  password,
  confirmPassword,
  fullName,
}) => {
  const errors = {};
  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = PASSWORD_REGEX.test(password);

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!isEmailValid) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (!isPasswordValid) {
    errors.password =
      "Password must contain at least 8 characters, including uppercase, lowercase, a number, and a special character.";
  }

  if (!fullName.trim()) {
    errors.fullName = "Full name is required";
  } else if (fullName.trim().length < 3) {
    errors.fullName = "Full name must be at least 3 characters";
  }

  if (!confirmPassword.trim()) {
    errors.confirmPassword = "Confirm password is required";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Password do not match";
  }

  return errors;
};

export const validateForgotPassword = () => {};
