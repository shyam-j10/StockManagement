import React from "react";
import { Link, NavLink } from "react-router-dom";
import Products from "../pages/Products";
import logo from "../images/Logo.png";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { pink } from "@mui/material/colors";
import './Header.css'
export default function Header() {
  return (
    <div>
      <header className="App-header">
        <br/>
        <img src={logo} className="mainimg" alt="logo" style={{backgroundColor:pink}}/>
        <div className="heading">
          
        <p>
          Welcome to
          <br />
          <h3>"STOCKS"</h3>
        </p>
        </div>
        <div className="buttonmain">
        
        <NavLink
            type="button"
            className="btn btn-success"
            to={"https://localhost:44393/View/Login.aspx" }
            target="_blank"
            // style={{ margin: "3px" }}
          >
           STOCK MANAGEMENT SYSTEM
          </NavLink>
          <br/>
          <NavLink type="button" className="btn btn-primary" to={`/home`}>
          Start Shopping
        </NavLink>
        </div>
        <br />
        
      </header>
<br/>
      
       
        <footer>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Our Details:</span>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company</h6>
             
              
             
              
              <p>
                <a href='#!' className='text-reset'>
                <b>Nandana</b>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Company PRN</h6>
             
              <p>
                <a href='#!' className='text-reset'>
                <b>9345833432</b>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Email Id</h6>
              
             
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                 nandanakumar175@gmail.com
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              
              
              <p>
                <MDBIcon icon="print" className="me-3" /> +91 9345833432
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: "palevioletred"}}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='http://localhost:3000/'>
          N-Mart.com
        </a>
      </div>
    </MDBFooter>
    </footer>
    
      
    </div>
    
  );
}
