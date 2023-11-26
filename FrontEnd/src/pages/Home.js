import React from 'react'
import { NavLink } from 'react-router-dom'
import Products from "./Products"
export default function Home() {
  return (
    <div>
      <div>
      <NavLink type="button" className="btn btn-success" to={`/`} style={{ margin: "3px" }}>
          Back to Home
        </NavLink>
     
      </div>
      
        <br/>

      <div>
        <Products/>
      </div>
      
    </div>
  )
}
