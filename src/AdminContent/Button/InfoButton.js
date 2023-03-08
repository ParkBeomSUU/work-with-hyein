import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminInfo from "../Button/AdminInfo";

const Users = () => {
  const [user, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/2") // 진짜 제이슨파일 주소 적음 됨
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <AdminInfo users={user} />
      {user.name}
    </>
  );
};

export default Users;
