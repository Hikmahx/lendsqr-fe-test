import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch } from "../../redux/store";
import { registerUser } from "../../redux/reducers/authSlice";
import { toast } from "react-toastify";
const logo: string = require("../../assets/logo/logo.svg").default;

const Register = () => {
  document.title = "Lendsqr Register";

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  type FormValues = {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const password = watch("password");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Call register API
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Registration successful! Redirecting to login...");
        // Store user data in Redux
        dispatch(
          registerUser({
            user: result.user,
            token: result.token,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(result.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred during registration");
      console.error(error);
    }
  };

  return (
    <main className="login-main">
      <div className="login-bg">
        <div className="">
          <img src={logo || "/placeholder.svg"} alt="Lendsqr" className="" />
        </div>
      </div>
      <div className="login-form">
        <div className="" style={{ width: '100%', height: "100vh", overflow: "scroll", paddingBottom: '10rem'}}>
          <h1 className="bold text-dull-blue text-40 mb-10">Create Account</h1>
          <p className="text-grayish-blue text-20 mb-60">
            Join us today to get started.
          </p>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
              <div className="relative">
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  type="text"
                  className=""
                  id="firstName"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name should be at least 2 characters",
                    },
                  })}
                />
                {errors.firstName && (
                  <p className="error-msg">{errors.firstName.message}</p>
                )}
              </div>
              <div className="relative">
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  type="text"
                  className=""
                  id="lastName"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name should be at least 2 characters",
                    },
                  })}
                />
                {errors.lastName && (
                  <p className="error-msg">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                className=""
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="error-msg">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="phoneNumber" className="sr-only">
                Phone Number
              </label>
              <input
                type="tel"
                className=""
                id="phoneNumber"
                placeholder="Phone Number (optional)"
                {...register("phoneNumber")}
              />
            </div>

            <div className="relative">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                className=""
                id="username"
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Username should be at least 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Username shouldn't be more than 20 characters",
                  },
                })}
              />
              {errors.username && (
                <p className="error-msg">{errors.username.message}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className=""
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="show-password"
              >
                {showPassword ? "hide" : "show"}
              </button>
              {errors.password && (
                <p className="error-msg">{errors.password.message}</p>
              )}
            </div>

            <div className="relative">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                className=""
                id="confirmPassword"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="show-password"
              >
                {showConfirmPassword ? "hide" : "show"}
              </button>
              {errors.confirmPassword && (
                <p className="error-msg">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button type="submit" className="green-btn">
              create account
            </button>

            <div className="login-link-wrapper">
              <p className="login-link-text">
                Already have an account?{" "}
                <Link to="/" className="login-link">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Register;
