import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css"

function User({ userInfo }) {

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  function deleteUser(_id){

    axios.post("/api/user/deleteUser", {_id: _id}).then(res => {
  
      Swal.fire({
        title: res.data,
        icon: "success"
      });
      const delay = setTimeout(() => {navigate(0)}, 3000);
      return () => clearTimeout(delay);

    }).catch(err => {console.log(err)});
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3" data-aos="zoom-in">
          <ul className="list-group">
            <li className="list-group-item">{userInfo._id}</li>
            <li className="list-group-item">{userInfo.name}</li>
            <li className="list-group-item">{userInfo.email}</li>
            <li className="list-group-item">{userInfo.cellphone}</li>
          </ul>

          <Link to={`/updateUser/${userInfo._id}`}>
            <li className="btn btn-success">Edit</li>
          </Link>
          &nbsp;
          <button className="btn btn-danger" onClick={() => {deleteUser(userInfo._id)}}>Delete</button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  );
};

export default User;
