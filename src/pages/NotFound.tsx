import React from "react";
import { useLocation, Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  let pageName = pathSegments[pathSegments.length - 1] || "page";
  if (/^\d+$/.test(pageName) && pathSegments.length > 1) {
    pageName = pathSegments[pathSegments.length - 2];
  }

  const formattedPageName = pageName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  document.title = "Page Not Found";

  return (
    <div className="users">
      <h1>{formattedPageName}</h1>
      <div
        style={{
          padding: "10rem 3rem",
          height: "50vh",
        }}
        className="flex flex-col items-center shadow-lg rounded-md bg-white login-form"
      >
        <p className="text-4xl mb-8 text-center">
          Sorry, {formattedPageName} page is not available at the moment
        </p>

        <button className="green-btn max-w-md mx-auto mt-20">
          <Link to="/dashboard/users">Go to Dashboard</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
