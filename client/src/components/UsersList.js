import React, { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";

function UsersList() {

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get("api/user/allUsers").then(res => {
      setUsersData(res.data);
    }).catch(err => {console.log(err)});
  }, []);

  // Map each user (create 1 item by 1 user individual data for the list)

  const usersList = usersData.map(user => {
    return (
      <div>
        <User userInfo={user} />
      </div>
    );
  });

  return (
    <div className="mt-4">
      <h2 className="mb-4">USERS LIST</h2>
      {usersList}
    </div>
  );
};

export default UsersList;
