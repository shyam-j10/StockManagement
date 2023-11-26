import { padding } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddAdmin() {

    let navigate=useNavigate()
  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name,email,password } = admin;

//on input change
  const onInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); //not show data in address bar 
    await axios.post("http://localhost:7777/admin", admin); //submittion of form
    navigate("/admin") //go data to home due to "/"
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register as Admin</h2>

          <form onSubmit ={(e) => onSubmit(e)} >

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Admin Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name Here"
                name="name"
                value={name} //
                onChange={(e) => onInputChange(e)} //
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email/UserName
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Email Here"
                name="email"
                value={email} //
                onChange={(e) => onInputChange(e)} //
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
              Password
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Password Here"
                name="password"
                value={password} //
                onChange={(e) => onInputChange(e)} //
                required
                
              />
            </div>
            <div>
            <button className="btn btn-primary" >
              Submit
            </button>
            </div>
            
            <Link className="btn btn-danger mx-2"  to="/admin">   
              Cancel
            </Link>  
            {/* //go data to home due to "/" */}
          </form>
        </div>
      </div>
    </div>
  );
}
