import React from "react";
import { Link } from "react-router-dom";

function User({ userInfo }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 offset-3">
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
          <button className="btn btn-danger">Delete</button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  )
}

export default User;
