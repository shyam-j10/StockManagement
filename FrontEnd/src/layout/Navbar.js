
import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
        <Link className="nav-link active" to={"https://localhost:44393/View/Login.aspx" }target="_blank">
        <h1 className="title" style={{ margin: '6px',color:"Green" }}>N-STOCKS</h1>
                </Link>
                
                <NavLink
            type="button"
            className="btn btn-outline-success"
            to={"/home"}
            style={{ margin: "3px" }}
          >
            Products
          </NavLink>


          <NavLink
            type="button"
            className="btn btn-outline-success"
            to={`/users`}
                    style={{ margin: "3px" }}
          >
            Users
          </NavLink>

          
          <NavLink
            type="button"
            className="btn btn-outline-success"
            to={`/loginregister`}
                    style={{ margin: "3px" }}
          >
            Admin
          </NavLink>

          {/* <NavLink
            type="button"
            className="btn btn-outline-success"
            to={`/cart`}
                    style={{ margin: "3px" }}
          >
            Cart
          </NavLink> */}






          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={"/home"}>
                  Our Products
                </Link>
              </li>
             
              
              
              <li class="nav-item">
              
                <div>
                  <Link
                    type="button"
                    className="btn btn-outline-success my-2 my-sm-0"
                    to={`/user/adduser`} 
                    style={{ margin: '5px' }}
                  >
                    Register
                  </Link>
                </div>
              
              </li>

              <li class="nav-item">
              
                <div>
                  <Link
                    type="button"
                    className="btn btn-outline-primary my-2 my-sm-0"
                    to={`/loginform`} 
                    style={{ margin: '5px' }}
                  >
                    Login
                  </Link>
                </div>
              
              </li>

              <li class="nav-item">
              
                <div>
                  <Link
                    type="button"
                    className="btn btn-outline-primary my-2 my-sm-0"
                    to={`/loginregister`} 
                    style={{ margin: '5px' }}
                  >
                    Admin Login
                  </Link>
                </div>
              
              </li>

            </ul>
            <form class="d-flex my-2 my-lg-0">
              <div>
                <Link
                  type="submit"
                  className="btn btn-outline-success my-2 my-sm-0"
                  to={`/cart`}
                >
                  Shopping Cart
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
