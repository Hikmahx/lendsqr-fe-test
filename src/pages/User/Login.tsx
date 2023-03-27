import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { AppDispatch } from "../../redux/store";
import { loginUser } from "../../redux/reducers/authSlice";
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

  const [showPassword, setshowPassword] = useState<Boolean>(true);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(loginUser([data]));
    navigate("/dashboard");
  };

  return (
    <main className="login-main">
      <div className="login-bg">
        <div className="">
          <img src={logo} alt="" className="" />
        </div>
      </div>
      <div className="login-form">
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
            <a href="/" className="forgot-password">
              forgot password
            </a>
          </div>
          <button type="submit" className="green-btn">
            log in
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
