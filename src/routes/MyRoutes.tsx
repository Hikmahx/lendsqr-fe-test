import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../pages/User/Login";
import NotFound from "../pages/NotFound";
import DashBoard from "../pages/User/DashBoard";
import Users from "../pages/User/Profile/Users";
import UserDetails from "../pages/User/Profile/UserDetails";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

const MyRoutes = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route path="dashboard" element={<DashBoard />}>
        <Route path="" element={<Users />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="">
        <Route path="*" element={<NotFound />} />
        <Route path="" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
