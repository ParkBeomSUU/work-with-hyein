import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminInfo from "../Button/AdminInfo";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <>
      <AdminInfo users={users} />
    </>
  );
};

export default Users;
