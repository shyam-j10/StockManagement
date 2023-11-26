import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../pages/css/Users.css";
export default function () {

const [users, setUsers]= useState([]);

const {id}=useParams();

useEffect(()=>{
    //console.log("Page loaded- stores");
    loadUsers();
}, []);  

const loadUsers=async ()=>{
    const result=await axios.get("http://localhost:7777/users"); //link from postman get method
    setUsers(result.data);
};

const deleteUser=async(id)=>{
  await axios.delete(`http://localhost:7777/user/${id}`)
  loadUsers();
};

  return (
    <div classNameName="container">

     

      <Link
        type="button"
        style={{ margin: "5px" }}
        className="btn btn-success"
        to={"/"}
      >
        Home
      </Link>
      {/* <Link
        type="button"
        style={{ margin: "5px" }}
        className="btn btn-primary"
        to={"/user/adduser"}
      >
        Register Yourself
      </Link> */}

      <div class="card">
        <div class="card-header"><h4>Our Users</h4></div>
      </div>

      <div className="py-4">
        <table className="table table-dark border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col" hidden>Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td hidden>{user.password}</td>
                <td>
                  <Link
                    className="btn btn-outline-success mx-2"
                    to={`/user/viewuser/${user.id}`}

                  >
                    View
                  </Link>

                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/user/edituser/${user.id}`}
                    hidden
                                      
                  >
                    Edit
                  </Link>
                  
                  <Link
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteUser(user.id)}
                    hidden
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
         
        
      </div>
      
    </div>
  );
}
