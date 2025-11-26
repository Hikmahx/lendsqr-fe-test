import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
const logo: string = require("../../assets/logo/logo.svg").default;

const ResetPassword = () => {
  document.title = "Lendsqr Reset Password";

  const navigate = useNavigate();
  const { token } = useParams<{ token: string }>();

  type FormValues = {
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const password = watch("password");

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password: data.password }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Password reset successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(result.message || "Failed to reset password");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
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
        <div className="form-wrapper">
          <h1 className="bold text-dull-blue text-40 mb-10">Reset Password</h1>
          <p className="text-grayish-blue text-20 mb-60">
            Enter your new password below.
          </p>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className=""
                id="password"
                placeholder="New Password"
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

            <button
              type="submit"
              className="green-btn"
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.6 : 1 }}
            >
              {isLoading ? "Resetting..." : "reset password"}
            </button>

            <div className="login-link-wrapper">
              <p className="login-link-text">
                Back to{" "}
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

export default ResetPassword;
