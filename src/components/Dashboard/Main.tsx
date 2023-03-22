import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="dashboard-main">
      <Outlet />
    </main>
  );
};

export default Main;
