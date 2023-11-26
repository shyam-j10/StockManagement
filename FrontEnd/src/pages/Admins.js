import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function () {

  const [admins, setAdmins]= useState([]);

  const {id}=useParams();

  useEffect(()=>{
    //console.log("Page loaded- stores");
    loadAdmins();
}, []); 

const loadAdmins=async ()=>{
  const result=await axios.get("http://localhost:7777/admins"); //link from postman get method
  setAdmins(result.data);
};

const deleteAdmin=async(id)=>{
  await axios.delete(`http://localhost:7777/admin/${id}`)
  loadAdmins();
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
      <Link
        type="button"
        style={{ margin: "5px" }}
        className="btn btn-primary"
        to={"/admin/addadmin"}
      >
        Register as Admin
      </Link>

      <div class="card">
        
        <h1>Admins</h1>

        <table className="table table-dark border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Password</th>
              <th scope="col" >Action</th>
            </tr>
          </thead>
          <tbody>
          
        {admins.map((admin, index) => (
          
          <tr>
            <th>{admin.id}</th>
            <td>{admin.name}</td>
            
        <td>{admin.email}</td>
        <td>Can't Show you Password</td>
        <td>
          
                
                  
                  <Link
                    className="btn btn-outline-danger mx-2"
                    onClick={() => deleteAdmin(admin.id)}
                    //hidden
                  >
                    Delete
                  </Link >
                

                </td>
          </tr>

        
        ))}
        </tbody>
        </table>

      </div>
    </div>
  )
}
