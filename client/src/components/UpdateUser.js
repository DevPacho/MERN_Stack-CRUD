import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function UpdateUser() {

  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");

  useEffect(() => {
    axios.post("/api/user/getUserData", {_id : params._id}).then(res => {

      const userData = res.data[0];

      setName(userData.name);
      setEmail(userData.email);
      setCellphone(userData.cellphone);
    });
  }, [params._id]);

  function editUser(){

    const userData = {
      name,
      email,
      cellphone,
      _id: params._id
    };

    axios.post("/api/user/updateUserData", userData).then(res => {

      Swal.fire({
        title: res.data,
        icon: "success"
      });
      const delay = setTimeout(() => {navigate("/")}, 3000);
      return () => clearTimeout(delay);

    }).catch(err => console.log(err));

    setName("");
    setEmail("");
    setCellphone("");
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">EDIT USER INFO</h2>
      </div>

      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={ ( (evnt) => setName(evnt.target.value) ) }
            >
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={ ( (evnt) => setEmail(evnt.target.value) ) }
            >
            </input>
          </div>

          <div className="mb-3">
            <label htmlFor="cellphone" className="form-label">Cellphone number</label>
            <input
              type="text"
              className="form-control"
              value={cellphone}
              onChange={ ( (evnt) => setCellphone(evnt.target.value) ) }
            >
            </input>
          </div>

          <button className="btn btn-success" onClick={editUser}>Update user</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
