import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function CreateUser() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");

  const navigate = useNavigate();

  function saveUser() {
    const userData = {
      name,
      email,
      cellphone,
    };

    axios.post("/api/user/createUser", userData).then(res => {

      Swal.fire({
        title: res.data,
        icon: "success"
      });
      const delay = setTimeout(() => {navigate("/")}, 3000);
      return () => clearTimeout(delay);

    }).catch(err => {console.error(err)});

    setName("");
    setEmail("");
    setCellphone("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">CREATE A NEW USER</h2>
      </div>

      <div className="row mt-4">
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

          <button className="btn btn-success" onClick={saveUser}>Create user</button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
