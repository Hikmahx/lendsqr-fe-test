import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  fetchUsersDetails,
  getAllOrgs,
} from "../../redux/reducers/detailsSlice";
import { setText } from "../../redux/reducers/sharedSlice";

const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { details, orgs } = useSelector((state: RootState) => state.details);
  useEffect(() => {
    dispatch(getAllOrgs());
    // eslint-disable-next-line
  }, [details]);

  type FormValues = {
    org: string;
    username: string;
    email: string;
    date: string;
    phone: string;
    status: string;
  };

  const { register, handleSubmit, reset } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      fetchUsersDetails({
        org: data.org !== "" ? `&orgName=${data.org}` : "",
        username: data.username !== "" ? `&userName=${data.username}` : "",
        email: data.email !== "" ? `&email=${data.email}` : "",
        date:
          data.date !== ""
            ? `&createdAt=${new Date(data.date).toISOString()}`
            : "",
        phone: data.phone !== "" ? `&phoneNumber=${data.phone}` : "",
      })
    );
    reset();
    dispatch(setText(""));
  };

  return (
    <div className="filter">
      <form className="filter-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="org" className="">
            Organization
          </label>
          <span className="select-wrapper">
            <select
              id="org"
              {...register("org")}
            >
              <option value="">Select</option>
              {orgs.length > 0 && (
                <>
                  {orgs.map((org) => (
                    <option key={org} value={`${org}`}>
                      {org}
                    </option>
                  ))}
                </>
              )}
              <option value="">All Organizations</option>
            </select>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0573 0.993783C10.8984 0.152691 12.1595 1.45644 11.3184 2.25487L6.56759 7.00563C6.23127 7.38407 5.64282 7.38407 5.3065 7.00563L0.640017 2.38129C-0.158963 1.5402 1.10267 0.279055 1.94322 1.1202L5.937 5.11398L10.0573 0.993783Z"
                fill="#213F7D"
              />
            </svg>
          </span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="username" className="">
            username
          </label>
          <input
            type="text"
            id="username"
            placeholder="User"
            {...register("username")}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="">
            email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="date" className="">
            date
          </label>
          <input
            type="date"
            id="date"
            placeholder="Date"
            {...register("date")}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone" className="">
            phone number
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Phone number"
            {...register("phone")}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="status" className="">
            status
          </label>
          <span className="select-wrapper">
            <select
              id="status"
              {...register("status")}
            >
              <option value="" selected disabled>
                Select
              </option>
              <option value="inactive">inactive</option>
              <option value="pending">pending</option>
              <option value="blacklisted">blacklisted</option>
              <option value="active">active</option>
            </select>
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0573 0.993783C10.8984 0.152691 12.1595 1.45644 11.3184 2.25487L6.56759 7.00563C6.23127 7.38407 5.64282 7.38407 5.3065 7.00563L0.640017 2.38129C-0.158963 1.5402 1.10267 0.279055 1.94322 1.1202L5.937 5.11398L10.0573 0.993783Z"
                fill="#213F7D"
              />
            </svg>
          </span>
        </div>
        <div className="form-btns">
          <button onClick={()=>reset()} type="button" className="reset-btn">
            Reset
          </button>
          <button type="submit" className="filter-btn">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filter;
