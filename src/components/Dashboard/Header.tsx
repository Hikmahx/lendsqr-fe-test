import React, { useEffect, useState } from "react";
import user from "../../assets/user/user.png";
import { useDispatch, useSelector } from "react-redux";
import { asideToggle } from "../../redux/reducers/sharedSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducers/authSlice";
import { SubmitHandler, useForm } from "react-hook-form";
import { fetchUsersDetails } from "../../redux/reducers/detailsSlice";
const logo: string = require("../../assets/logo/logo.svg").default;

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { showAside } = useSelector((state: RootState) => state.shared);
  const { storedUserInfo } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const [showLogout, setShowLogout] = useState(false);

  useEffect(() => {
    // RETURN TO LOGIN PAGE IF NO USER IS LOGGED IN
    storedUserInfo.length === 0 && navigate("/");
    // eslint-disable-next-line
  }, [storedUserInfo]);

  type FormValues = {
    search: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    navigate("/dashboard");
    dispatch(
      fetchUsersDetails({
        search: data.search !== "" ? `&search=${data.search}` : "",
      })
    );
    reset();
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="logo">
          <div
            onClick={() => dispatch(asideToggle(!showAside))}
            className="aside-toggle"
            aria-hidden="true"
          >
            <span></span>
          </div>
          <Link to="/">
            <img src={logo} alt="Lendsqr" />
          </Link>
        </div>
        <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <label htmlFor="search" className="sr-only">
              search
            </label>
            <input
              type="text"
              className=""
              id="search"
              placeholder="Search for anything"
              {...register("search", {
                required: "Please include a search value",
                maxLength: {
                  value: 25,
                  message: "search value shouldn't be more than 25 characters",
                },
              })}
            />
            {errors.search && (
              <p className="error-msg">{errors.search.message}</p>
            )}
          </div>
          <button type="submit" className="search-button">
            <span className="sr-only">Search for anything</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z"
                fill="white"
              />
            </svg>
          </button>
        </form>
        <nav>
          <ul>
            <li>
              <a href="/" className="docs-link">
                Docs
              </a>
            </li>
            <li className="notification">
              <span role="alert">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7001 13.691C19.718 16.5176 20.8517 19.2235 22.8584 21.2183C23.0327 21.3912 23.0856 21.6531 22.9916 21.8804L22.9912 21.8815C22.8964 22.107 22.676 22.2561 22.4284 22.2549M19.7001 13.691L22.429 22.0549M19.7001 13.691V13.5968V11.6642C19.7176 10.1275 19.2154 8.63071 18.275 7.41524C17.3984 6.28217 16.1892 5.45625 14.821 5.05095C15.2642 4.42355 15.3572 3.60324 15.0487 2.88438L15.0486 2.88426C14.6962 2.06444 13.8907 1.53333 12.9982 1.53333C12.1057 1.53333 11.3002 2.06444 10.9477 2.88426L10.9477 2.88438C10.6397 3.60199 10.7318 4.42065 11.173 5.04761C9.82501 5.42985 8.62769 6.22584 7.75338 7.32787C6.81219 8.51196 6.30025 9.97972 6.30025 11.4925L6.30025 13.5968L6.30025 13.5973C6.30723 16.4577 5.17067 19.2014 3.14185 21.2182C2.96751 21.3911 2.91458 21.6531 3.00854 21.8804L3.00898 21.8814C3.10373 22.107 3.32419 22.2561 3.57172 22.2549M19.7001 13.691L10.0221 22.2549M22.4284 22.2549C22.4282 22.2549 22.428 22.2549 22.4278 22.2549L22.429 22.0549M22.4284 22.2549H22.429V22.0549M22.4284 22.2549H15.9781M22.429 22.0549H15.8112M15.9781 22.2549C15.9899 22.1989 16.0002 22.1422 16.0089 22.085L15.8112 22.0549M15.9781 22.2549C15.6832 23.6549 14.4456 24.67 13.0001 24.67C11.5546 24.67 10.3171 23.6549 10.0221 22.2549M15.9781 22.2549H15.8112V22.0549M15.8112 22.0549L10.0221 22.2549M10.0221 22.2549H10.189V22.0549L9.99125 22.0851C9.99999 22.1423 10.0103 22.1989 10.0221 22.2549ZM10.0221 22.2549H3.57172M3.57172 22.2549C3.57195 22.2549 3.57218 22.2549 3.57241 22.2549L3.57118 22.0549V22.2549H3.57172ZM14.7285 22.2549C14.4747 22.9799 13.7867 23.4798 13.0001 23.4799H13C12.2133 23.4798 11.5254 22.9799 11.2716 22.2549H14.7285ZM7.51233 11.4924L7.51233 11.4921C7.51037 9.98893 8.12478 8.55137 9.21241 7.51489L9.21249 7.51481C10.2998 6.47745 11.7643 5.93259 13.2651 6.00474C14.6959 6.09328 16.0376 6.73143 17.0099 7.78408L17.0099 7.78409C17.9834 8.83803 18.5119 10.2253 18.4874 11.6596H18.4873V11.663L18.4873 13.5961C18.4873 13.5962 18.4873 13.5963 18.4873 13.5964C18.4786 16.3045 19.3943 18.9297 21.0743 21.0424H4.92542C6.60545 18.9296 7.52131 16.3045 7.51233 13.5964L7.51233 11.4924ZM13.0001 2.75485C13.4118 2.75485 13.7837 3.00273 13.9416 3.38386C14.0986 3.76422 14.0121 4.20229 13.7209 4.49444C13.4288 4.78554 12.9908 4.87212 12.6105 4.71515C12.2293 4.55724 11.9813 4.18537 11.9813 3.7736C11.9813 3.21071 12.4372 2.75485 13.0001 2.75485Z"
                    fill="#213F7D"
                    stroke="#213F7D"
                    strokeWidth="0.4"
                  />
                </svg>
              </span>
            </li>
            <li className="user-profile relative">
              <img src={user} alt="user icon" className="" />
              {storedUserInfo.map((user) => (
                <p
                  className="username"
                  key={user.username}
                  style={{ textTransform: "capitalize" }}
                >
                  <>{user.username}</>
                </p>
              ))}
              <svg
                style={{ cursor: "pointer " }}
                onClick={() => setShowLogout(!showLogout)}
                width="8"
                height="5"
                viewBox="0 0 8 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.39229 4.0516C3.72823 4.42504 4.27511 4.42192 4.60791 4.0516L7.48291 0.856996C7.81885 0.484336 7.68525 0.181995 7.18447 0.181995H0.815667C0.314887 0.181995 0.183627 0.487456 0.517227 0.856996L3.39229 4.0516Z"
                  fill="#213F7D"
                />
              </svg>

              {showLogout && (
                <div
                  style={{ cursor: "pointer " }}
                  className="logout"
                  onClick={() => dispatch(logout())}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M 4.6 16 H 2 C 1.2 16 0.4 15.7 -0.1 15.1 C -0.7 14.6 -1 13.8 -1 13 L -1 7 C -1 6.2 -0.7 5.4 -0.1 4.9 C 0.4 4.3 1.2 4 2 4 H 4.6 C 4.7 4 4.8 4 4.9 4.1 C 5 4.2 5 4.3 5 4.4 V 5.6 C 5 5.7 5 5.8 4.9 5.9 C 4.8 6 4.7 6 4.6 6 H 2 C 1.7 6 1.5 6.1 1.3 6.3 C 1.1 6.5 1 6.7 1 7 V 13 C 1 13.3 1.1 13.5 1.3 13.7 C 1.5 13.9 1.7 14 2 14 H 4.6 C 4.7 14 4.8 14 4.9 14.1 C 5 14.2 5 14.3 5 14.4 V 15.6 C 5 15.7 5 15.8 4.9 15.9 C 4.8 16 4.7 16 4.6 16 Z"
                      fill="currentColor"
                    />
                    <path
                      d="M 10 4.8 L 14.8 9.5 C 14.8 9.5 14.9 9.6 14.9 9.7 C 15 9.8 15 9.9 15 10 C 15 10.1 15 10.2 14.9 10.3 C 14.9 10.4 14.8 10.5 14.8 10.5 L 10 15.2 C 9.9 15.4 9.7 15.5 9.5 15.5 C 9.3 15.5 9.1 15.4 9 15.2 L 8.3 14.6 C 8.2 14.5 8.2 14.4 8.1 14.3 C 8.1 14.2 8.1 14.1 8.1 14 C 8.1 13.9 8.1 13.8 8.1 13.7 C 8.2 13.6 8.2 13.5 8.3 13.5 L 10.7 11.3 H 4.8 C 4.7 11.3 4.6 11.2 4.5 11.2 C 4.4 11.2 4.3 11.1 4.2 11 C 4.1 11 4.1 10.9 4.1 10.8 C 4 10.7 4 10.6 4 10.5 V 9.5 C 4 9.4 4 9.3 4.1 9.2 C 4.1 9.1 4.1 9 4.2 9 C 4.3 8.9 4.4 8.8 4.5 8.8 C 4.6 8.8 4.7 8.7 4.8 8.7 H 10.7 L 8.3 6.5 C 8.2 6.5 8.2 6.4 8.1 6.3 C 8.1 6.2 8.1 6.1 8.1 6 C 8.1 5.9 8.1 5.8 8.1 5.7 C 8.2 5.6 8.2 5.5 8.3 5.4 L 9 4.8 C 9.1 4.6 9.3 4.5 9.5 4.5 C 9.7 4.5 9.9 4.6 10 4.8 Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="">Logout</span>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
