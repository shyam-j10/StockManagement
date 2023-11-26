import React from "react";
import { Link } from "react-router-dom";
import "../pages/css/Cart.css";
import SummaryPage from "./SummaryPage";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  return (
    <div>
      <Link
        type="button"
        style={{ margin: "5px" }}
        className="btn btn-success"
        to={"/"}
      >
        Home
      </Link>
       <SummaryPage/>


    </div>
  );
}
