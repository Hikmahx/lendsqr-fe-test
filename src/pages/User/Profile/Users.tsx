import React from "react";
import Cards from "../../../components/Dashboard/Cards/Cards";
import Pagination from "../../../components/Dashboard/Pagination";
import Table from "../../../components/Dashboard/Table";

const Users = () => {
  return (
    <div className="users">
      <h1>Users</h1>
      <Cards />
      <Table />
      <Pagination />
    </div>
  );
};

export default Users;
