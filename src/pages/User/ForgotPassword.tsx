import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
const logo: string = require("../../assets/logo/logo.svg").default;

const ForgotPassword = () => {
  document.title = "Lendsqr Forgot Password";

  const navigate = useNavigate();

  type FormValues = {
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: data.email }),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success(
          "Reset instructions sent to your email. Check your inbox!"
        );
        // In production, redirect to a check-email page
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(result.message || "Failed to process request");
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
        <div style={{ width: "100%", margin: "auto" }}>
          <h1 className="bold text-dull-blue text-40 mb-10">
            Forgot Password?
          </h1>
          <p className="text-grayish-blue text-20 mb-60">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                className=""
                id="email"
                placeholder="Email Address"
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

            <button
              type="submit"
              className="green-btn"
              disabled={isLoading}
              style={{ opacity: isLoading ? 0.6 : 1 }}
            >
              {isLoading ? "Sending..." : "send reset link"}
            </button>

            <div className="login-link-wrapper">
              <p className="login-link-text">
                Remember your password?{" "}
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

export default ForgotPassword;
