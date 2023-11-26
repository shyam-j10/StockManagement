import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate=useNavigate()
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const { name, username, email,password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); //not show data in address bar 
    await axios.post("http://localhost:7777/user", user);
    navigate("/user") //go data to home due to "/"


    
    const Signup=async (user)=>{
      const response = await axios.
          post("/user/adduser", user);
      return response.data();
  }

    Signup(user).then((resp)=>{
      console.log(resp);
      console.log("success log");
    }).catch((error)=>{
      console.log(error)
      console.log("error log")
    })
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit ={(e) => onSubmit(e)} >

            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
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
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Username Here"
                name="username"
                value={username} //
                onChange={(e) => onInputChange(e)} //
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
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
            
            <Link className="btn btn-danger mx-2" to="/">   
              Cancel
            </Link>  
            {/* //go data to home due to "/" */}
          </form>
        </div>
      </div>
    </div>
  );
}
