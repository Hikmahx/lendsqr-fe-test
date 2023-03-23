import React from "react";

const Filter = () => {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
        fill="#545F7D"
      />
    </svg>
  );
};

const ColVertical = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_5530_2616)">
        <path
          d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z"
          fill="#545F7D"
        />
      </g>
      <defs>
        <clipPath id="clip0_5530_2616">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Table = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr className="">
            <th className="">
              <span className="">
                organization
                <Filter />
              </span>
            </th>
            <th className="">
              <span className="">
                username
                <Filter />
              </span>
            </th>
            <th className="">
              <span className="">
                email
                <Filter />
              </span>
            </th>
            <th className="">
              <span className="">
                phone number
                <Filter />
              </span>
            </th>
            <th className="">
              <span className="">
                date joined
                <Filter />
              </span>
            </th>
            <th className="">
              <span className="">
                status
                <Filter />
              </span>
            </th>
            <th className="">
              <span className=""></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className="status-pill inactive">inactive</span>
            </td>
            <td>
              <ColVertical />
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className="status-pill pending">pending</span>
            </td>
            <td>
              <ColVertical />
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className="status-pill blacklisted">blacklisted</span>
            </td>
            <td>
              <ColVertical />
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com</td>
            <td>08078903721</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className="status-pill active">active</span>
            </td>
            <td>
              <ColVertical />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
