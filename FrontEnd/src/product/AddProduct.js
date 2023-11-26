import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddProduct() {

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

  const onSubmit = async (e) => {
    e.preventDefault(); //not show data in address bar 
    await axios.post("http://localhost:7777/product", product);
    navigate("/products") //go data to home due to "/"
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Product</h2>

          <form onSubmit ={(e) => onSubmit(e)} >

            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter product Name Here"
                name="productName"
                value={productName} //
                onChange={(e) => onInputChange(e)} //
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your price Here"
                name="price"
                value={price} //
                onChange={(e) => onInputChange(e)} //
              />
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter quantity Here"
                productName="quantity"
                value={quantity} //
                onChange={(e) => onInputChange(e)} //
              />
            </div>
            <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>

            <Link className="btn btn-danger mx-2" to="/product">
              Cancel
            </Link>

          </form>
        </div>
      </div>
    </div>
  );
}
