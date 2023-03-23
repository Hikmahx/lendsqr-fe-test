import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <form className="filter-form">
        <div className="input-wrapper">
          <label htmlFor="organization" className="">
            Organization
          </label>
          <span className="select-wrapper">
            <select name="organization" id="organization">
              <option value="Lendsqr">Lendsqr</option>
              <option value="Irorun">Irorun</option>
              <option value="Lendstar">Lendstar</option>
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
          <input type="text" name="username" id="username" placeholder="User" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="">
            email
          </label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="date" className="">
            date
          </label>
          <input type="date" name="date" id="date" placeholder="Date" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone" className="">
            phone number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="status" className="">
            status
          </label>
          <span className="select-wrapper">
            <select name="status" id="status">
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
      </form>
    </div>
  );
};

export default Filter;
