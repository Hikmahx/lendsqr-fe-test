import React, { useEffect } from "react";
import Aside from "../../components/Dashboard/Aside";
import Header from "../../components/Dashboard/Header";
import Main from "../../components/Dashboard/Main";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { fetchUsersDetails } from "../../redux/reducers/detailsSlice";

const DashBoard = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsersDetails(""));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <section className="">
        <Aside />
        <Main />
      </section>
    </div>
  );
};

export default DashBoard;
