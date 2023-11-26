
import "./css/SummaryPage.css";
import logo from "./images/logo.jpg";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./css/Products.css";
import picon from "../images/picon.jpg"
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRadio,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";


export default function SummaryPage() {

  const [products, setProducts]= useState([]);

  const {id}=useParams();

  useEffect(()=>{
    //console.log("Page loaded- stores");
    loadProducts();
}, []);

const loadProducts=async ()=>{
  const result=await axios.get("http://localhost:7777/products"); //link from postman get method
  setProducts(result.data);
};

  return (
    <section className="h-100 h-custom">
      <MDBContainer className="py-5 h-200">
        <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
            <MDBTable responsive>
            <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                  Product Info
                  </th>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>                  
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </MDBTableHead>
              
              <MDBTableBody>
              {products.map((product, index) => (
<tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={logo}
                        fluid
                        className="rounded-3"
                        style={{ width: "120px" }}
                        alt="Book"
                      />
                      <div className="flex-column ms-4">
                      
                      <p className="mb-2">Fresh</p>
                        <p className="mb-2">1KG-{product.productName}</p>
                        <p className="mb-2">Holding Product Id-{product.productId}</p>
                        
                      </div>
                    </div>
                  </th>
                  {/* id */}
                  <td className="align-middle" scope="row">
                  <p className="mb-0" key={index} style={{ fontWeight: "500" }}>
                  {/* {index+1} */}
                  {product.productId}
                    </p>
                  </td>
                  {/* productName */}
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                    {product.productName}
                    </p>
                  </td>
                  {/* price */}
                  <td className="align-middle">
                    <p className="mb-0" style={{ fontWeight: "500" }}>
                    ₹{product.price}
                    </p>
                  </td>
                  {/* quantity */}
                  <td className="align-middle">
                    <div class="d-flex flex-row align-items-center">
                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="minus" />
                      </MDBBtn>

                      <MDBInput
                        min={0}
                        type="number"
                        size="sm"
                        style={{ width: "50px" }}
                        defaultValue={1}
                        max={product.quantity}
                      ></MDBInput>

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>

                  {/* action */}
                  <td className="align-middle">
                      <div class="product-action">
                      <Link type="button-atc" style={{ margin: "5px" }} className="btn btn-danger" to={"/home"} >
                    Remove From Cart
                  </Link>
                  </div>
                  </td>
                </tr>

                ))}
                </MDBTableBody>
            </MDBTable>
          </MDBCol>
          
          
        </MDBRow>
      </MDBContainer>
    </section>
  );
}