import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BasicInfo from "../../../components/Dashboard/UserDetails/BasicInfo";
import {
  fetchSingleUserDetails,
  updateUsersStatus,
} from "../../../redux/reducers/detailsSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { toast } from "react-toastify";

const UserDetails = () => {
  document.title = "Lendsqr User Details Page";

  type ParamsType = {
    id: string;
  };

  const navigate = useNavigate();
  const { id } = useParams<keyof ParamsType>() as ParamsType;
  const dispatch = useDispatch<AppDispatch>();
  const { storedUsersStatus } = useSelector(
    (state: RootState) => state.details
  );
  useEffect(() => {
    dispatch(fetchSingleUserDetails(id));
    // eslint-disable-next-line
  }, []);

  // ACTIVATES THE USER'S STATUS AFTER A GIVEN TIME
  const userStatusActivation = () => {
    // REMOVES THIS (USER QUERY) COMPONENT
    let status = storedUsersStatus.map((item) => item.id).includes(id)
      ? // GET THE USER'S STATUS
        storedUsersStatus.filter((item) => item.id === id)[0].status
      : // OR USE DEFAULT (INACTIVE)
        "inactive";
    if (status === "active") {
      toast(<p style={{ fontSize: 16 }}>This user is already activated</p>, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        type: "default",
        className: "background",
        progressClassName: "active-progress-bar",
      });
    } else {
      if (status === "pending") {
        toast(<p style={{ fontSize: 16 }}>This user is currently pending</p>, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          type: "default",
          className: "background",
          progressClassName: "pending-progress-bar",
        });
      } else {
        // SETS THE USER'S STATUS TO PENDING
        dispatch(updateUsersStatus({ id, status: "pending" }));
        toast(<p style={{ fontSize: 16 }}>User status pending</p>, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnFocusLoss: true,
          draggable: true,
          pauseOnHover: true,
          type: "default",
          className: "pending-background",
          progressClassName: "pending-progress-bar",
        });
        // NOTIFIES THAT THE USER'S STATUS WILL BE ACTIVATED AFTER SOME TIME
        // THE TIMER IS FOR THIS NOTIFICATION TO COME AFTER THE ONE ABOVE
        const pendingTimer = setTimeout(() => {
          toast(
            <p style={{ fontSize: 16 }}>
              User status will be activated after 3 minutes
            </p>,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnFocusLoss: true,
              draggable: true,
              pauseOnHover: true,
              type: "default",
              className: "pending-background",
              progressClassName: "pending-progress-bar",
            }
          );
        }, 2000);
        // USER'S STATUS IS FINALLY ACTIVATED
        const ActivationTimer = setTimeout(() => {
          dispatch(updateUsersStatus({ id, status: "active" }));
          toast(<p style={{ fontSize: 16 }}>User status activated</p>, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true,
            type: "default",
            className: "active-background",
            progressClassName: "active-progress-bar",
          });
        }, 3 * 60 * 1000);
        // TIMEOUT CLEARED
        return () => {
          clearTimeout(pendingTimer);
          clearTimeout(ActivationTimer);
        };
      }
    }
  };

  return (
    <div className="user-details-wrapper">
      <button onClick={() => navigate("/dashboard/users")} className="back">
        <svg
          width="28"
          height="10"
          viewBox="0 0 28 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.94997 5.35639C0.994502 5.47123 1.0613 5.5767 1.14684 5.66575L4.89684 9.41575C5.07263 9.5927 5.31285 9.69348 5.56248 9.69348C5.81211 9.69348 6.05232 9.5927 6.22812 9.41575C6.40508 9.23997 6.50586 8.99974 6.50586 8.75011C6.50586 8.50048 6.40508 8.26027 6.22812 8.08447L4.07187 5.93761H26.6562C27.1742 5.93761 27.5937 5.51809 27.5937 5.00011C27.5937 4.48213 27.1742 4.06261 26.6562 4.06261H4.07187L6.22812 1.91575C6.5961 1.54777 6.5961 0.952482 6.22812 0.584502C5.86014 0.216522 5.26485 0.216522 4.89687 0.584502L1.14687 4.3345C1.06133 4.42356 0.994532 4.52903 0.95 4.64386C0.901952 4.75636 0.876173 4.87706 0.875 5.00011C0.876172 5.12316 0.901953 5.24386 0.95 5.35636L0.94997 5.35639Z"
            fill="#545F7D"
          />
        </svg>
        <span className="">Back to Users</span>
      </button>

      <section className="user-header">
        <h1 className="">User Details</h1>
        <div className="user-btns">
          <button
            onClick={() => {
              dispatch(updateUsersStatus({ id, status: "blacklisted" }));
              toast(<p style={{ fontSize: 16 }}>User status blacklisted</p>, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                draggable: true,
                pauseOnHover: true,
                type: "default",
                className: "blacklisted-background",
                progressClassName: "blacklisted-progress-bar",
              });
            }}
            className="blacklist"
          >
            Blacklist User
          </button>
          <button
            onClick={() => {
              userStatusActivation();
            }}
            className="activate"
          >
            Activate User
          </button>
        </div>
      </section>
      <BasicInfo />
    </div>
  );
};

export default UserDetails;
