import React from "react";

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

          <button className="btn btn-success">Edit</button>
          &nbsp;
          <button className="btn btn-danger">Delete</button>
          <hr className="mt-4"></hr>
        </div>
      </div>
    </div>
  )
}

export default User;
