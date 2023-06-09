import React, { useState } from "react";
import Filter from "../dropdown/Filter";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import UserQuery from "../dropdown/UserQuery";
import { setText } from "../../redux/reducers/sharedSlice";

const Table = () => {
  const [colId, setColId] = useState<string | null | undefined>();
  const { details, loading, errMsg, error, storedUsersStatus } = useSelector(
    (state: RootState) => state.details
  );
  const { text } = useSelector((state: RootState) => state.shared);
  const dispatch = useDispatch();

  // TOGGLE THE FILTER COMPONENT
  const toggleFilterDiv = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    event.stopPropagation();
    let eventText =
      (event.target as Element).tagName === "svg"
        ? (event.target as Element).parentNode?.textContent
        : (event.target as Element).parentNode?.parentNode?.textContent;

    // OPENS THE FILTER COMPONENT RIGHT NEXT TO THE CLICKED TABLE HEADER
    dispatch(setText(eventText));
    // CLOSE THE USER QUERY COMPONENT
    setColId("");
  };

  // WILL GET THE STATUS OF A USER FROM THE LOCAL STORAGE BASED ON THE ID
  const userStatus = (id: string) => {
    try {
      //  IF THE USER'S STATUS IS IN THE LOCAL STORAGE (IE STORED USERS STATUS ARRAY)
      return storedUsersStatus.map((item) => item.id).includes(id)
        ? // RETURN THE STATUS VALUE (FILTERS THRU THE ARRAY TO GET A SPECIFIC USER'S STATUS)
          storedUsersStatus.filter((item) => item.id === id)[0].status
        : // ELSE RETURN INACTIVE AS THE STATUS
          "inactive";
    } catch (error) {
      console.log(error);
    }
  };

  interface colProps {
    id: string;
  }

  // TOGGLE USER QUERY COMPONENT
  const toggleDropDown = (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    { id }: colProps
  ) => {
    event.stopPropagation();
    colId === id ? setColId("") : setColId(`${id}`);
    dispatch(setText(""));
  };

  // ICON NEXT TO EACH TABLE HEADER
  const FilterIcon = () => {
    return (
      <svg
        onClick={(e) => toggleFilterDiv(e)}
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

  // THREE VERTICAL DOTS ICON NEXT TO EACH TABLE ROW
  const ColVertical = ({ id }: colProps) => {
    return (
      <div className="col-dropdown">
        <svg
          onClick={(e) => toggleDropDown(e, { id })}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_5530_2616)">
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
      </div>
    );
  };

  return (
    <div className="table-container" id="table">
      <div className="table-wrapper">
        <table>
          {!error && (
            <thead>
              <tr className="">
                <th className="" data-key="org">
                  <span className={text === "organization" ? "org" : ""}>
                    organization
                    <FilterIcon />
                    {text === "organization" ? <Filter /> : ""}
                  </span>
                </th>
                <th className="" data-key="user">
                  <span className={text === "username" ? "user" : ""}>
                    username
                    <FilterIcon />
                    {text === "username" ? <Filter /> : ""}
                  </span>
                </th>
                <th className="" data-key="email">
                  <span className={text === "email" ? "email" : ""}>
                    email
                    <FilterIcon />
                    {text === "email" ? <Filter /> : ""}
                  </span>
                </th>
                <th className="" data-key="number">
                  <span className={text === "phone number" ? "number" : ""}>
                    phone number
                    <FilterIcon />
                    {text === "phone number" ? <Filter /> : ""}
                  </span>
                </th>
                <th className="" data-key="date">
                  <span className={text === "date joined" ? "date" : ""}>
                    date joined
                    <FilterIcon />
                    {text === "date joined" ? <Filter /> : ""}
                  </span>
                </th>
                <th className="" data-key="status">
                  <span className={text === "status" ? "status" : ""}>
                    status
                    <FilterIcon />
                    {text === "status" ? <Filter /> : ""}
                  </span>
                </th>
                <th className="">
                  <span className="sr-only">more</span>
                </th>
              </tr>
            </thead>
          )}
          <tbody>
            <>
              {!error ? (
                <>
                  {loading ? (
                    <>
                      <tr>
                        <td className="loading">Loading...</td>
                      </tr>
                    </>
                  ) : (
                    <>
                      {details.length > 0 ? (
                        <>
                          {details.map((detail, index) => (
                            <tr key={detail.id}>
                              <td className="org">{detail.orgName}</td>
                              <td>{detail.userName}</td>
                              <td className="email">{detail.email}</td>
                              <td>
                                {detail.phoneNumber.replace(
                                  /[^0-9 | / | - | \s]/g,
                                  ""
                                )}
                              </td>
                              <td>
                                <>
                                  {new Date(detail.createdAt).toLocaleString(
                                    "en-US",
                                    {
                                      year: "numeric",
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                      hour12: true,
                                    }
                                  )}
                                </>
                              </td>
                              <td>
                                <span
                                  className={`status-pill ${userStatus(
                                    detail.id
                                  )}`}
                                >
                                  {userStatus(detail.id)}
                                </span>
                              </td>
                              <td className="relative">
                                <ColVertical id={detail.id} />
                                {colId === `${detail.id}` ? (
                                  <UserQuery
                                    id={detail.id}
                                    setColId={setColId}
                                    status={
                                      // IF THE USER'S STATUS IS IN THE LOCAL STORAGE (IE STORED USERS STATUS ARRAY)
                                      storedUsersStatus
                                        .map((item) => item.id)
                                        .includes(detail.id)
                                        ? // GET THE USER'S STATUS
                                          storedUsersStatus.filter(
                                            (item) => item.id === detail.id
                                          )[0].status
                                        : // OR USE DEFAULT (INACTIVE)
                                          "inactive"
                                    }
                                  />
                                ) : (
                                  ""
                                )}
                              </td>
                            </tr>
                          ))}
                        </>
                      ) : (
                        <tr>
                          <td className="" style={{ whiteSpace: "nowrap" }}>
                            No data with this filter found.
                          </td>
                        </tr>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <tr>
                    <td className="error-message">{errMsg}.</td>
                  </tr>
                </>
              )}
            </>
            {/* <span className="status-pill inactive">inactive</span>
                <span className="status-pill pending">pending</span>
                <span className="status-pill blacklisted">blacklisted</span>
                <span className="status-pill active">active</span> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
