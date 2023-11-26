
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams,useNavigate } from "react-router-dom";
import "./css/Products.css";
import picon from "../images/picon.jpg";
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
export default function () {

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

let navigate=useNavigate()
const [product, setproduct] = useState({
  productName: "",
  price: "",
  quantity: "",
});

const { productName, price, quantity } = product;

const onInputChange = (e) => {
  setproduct({ ...product, [e.target.productName]: e.target.value });
};

// const onSubmit = async (e) => {
//   e.preventDefault(); //not show data in address bar 
//   await axios.post("http://localhost:7777/product", product);
//   navigate("/product") //go data to home due to "/"
// };

const deleteProduct=async(id)=>{
  await axios.delete(`http://localhost:7777/product/${id}`)
  loadProducts();
};

  return (
    <div>
      <div class="card">
        <div class="card-header">Welcome to N-MART!</div>
        <div class="card-body">
          <div class="card">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <h2>OUR PRODUCTS</h2>
                
              </blockquote>
            </div>
          </div>
        </div>

          <div className="py-4">
          
            <MDBCol>
            <MDBTable responsive>
            <MDBTableHead>
                <tr>
                  <th scope="col" className="h5">
                  <b>Product Info</b>
                  </th>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>                  
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>

              


                {/* {products.map((product, index) => (

              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td></tr>
                ))} */}
{/* ADDING PRODUCTS FROM DB  */}
{products.map((product, index) => (
<tr>
                  <th scope="row">
                    <div className="d-flex align-items-center">
                      <img
                        src={picon}
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
                        onChange={(e) => onInputChange(e)} //
                      />

                      <MDBBtn className="px-2" color="link">
                        <MDBIcon fas icon="plus" />
                      </MDBBtn>
                    </div>
                  </td>

                  {/* action */}
                  <td className="align-middle">
                      <div class="product-action" onChange={(e) => onInputChange(e)}>
                      <Link type="submit" style={{ margin: "5px" }} className="btn btn-primary" to={"/cart"} >
                    Add To Cart
                  </Link>
                  </div>
                  
                  </td>
                </tr>

                ))}
                
                </MDBTableBody>
                </MDBTable>
            </MDBCol>

          </div>

        <div class="card-footer text-muted">
          nandanakumar175@gmail.com
        </div>
      </div>
    </div>
  );
}
