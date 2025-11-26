import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/reducers/authSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const logo: string = require("../../assets/logo/logo.svg").default;

const Login = () => {
  document.title = "Lendsqr Login";

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  type FormValues = {
    username: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const [showPassword, setshowPassword] = useState<boolean>(true);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        dispatch(loginUser([{ username: result.user.username }]));
        localStorage.setItem("authToken", result.token);
        navigate("/dashboard");
      } else {        
        // toast.error(result.message || "Login failed");
              toast(<p style={{ fontSize: 16 }}>This user is already activated</p>, {
                position: "top-right",
                autoClose: 300000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                type: "default",
                className: "background",
                progressClassName: "active-progress-bar",
              });
      }
    } catch (error) {
      // toast.error("An error occurred during login");
            toast(<p style={{ fontSize: 16 }}>This user is already activated</p>, {
              position: "top-right",
              autoClose: 300000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              draggable: true,
              pauseOnHover: true,
              type: "default",
              className: "background",
              progressClassName: "active-progress-bar",
            });
      console.error(error);
    }
  };

  return (
    <main className="login-main">
      <div className="login-bg">
        <div className="">
          <img src={logo} alt="" className="" />
        </div>
      </div>
      <div className="login-form">
        <div style={{width:'100%', margin: 'auto'}}>
          <h1 className="bold text-dull-blue text-40 mb-10">Welcome!</h1>
          <p className="text-grayish-blue text-20 mb-60">
            Enter details to login.
          </p>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative">
              <label htmlFor="username" className="sr-only">
                username
              </label>
              <input
                type="text"
                className=""
                id="username"
                placeholder="Username"
                {...register("username", {
                  required: "Please include a username",
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
                type={showPassword ? "password" : "text"}
                className=""
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "Please enter your password",
                  minLength: {
                    value: 6,
                    message: "Password shouldn't be less than 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setshowPassword(!showPassword)}
                className="show-password"
              >
                {showPassword ? "show" : "hide"}
              </button>
              {errors.password && (
                <p className="error-msg">{errors.password.message}</p>
              )}
            </div>
            <div className="forgot-wrapper">
              <Link to="/forgot-password" className="forgot-password">
                forgot password
              </Link>
            </div>
            <button type="submit" className="green-btn">
              log in
            </button>
            <div className="register-link-wrapper">
              <p className="register-link-text">
                Don't have an account?{" "}
                <Link to="/register" className="register-link">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
