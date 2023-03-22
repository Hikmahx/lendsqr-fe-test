import React from "react";
import Aside from "../../components/Dashboard/Aside";
import Header from "../../components/Dashboard/Header";
import Main from "../../components/Dashboard/Main";

const DashBoard = () => {
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
