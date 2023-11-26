import { bgcolor, color } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import "./css/LoginRegister.css";
export default function LoginRegister() {
  return (
    <div>
        <section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.sv"
          class="img-fluid" alt="Phone image"/>
      </div>
      
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <h2>Login to N-Mart</h2><br/>
        <form action=''method=''>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" placeholder='Email address'/>
            {/* <label class="form-label" for="form1Example13" >Email address</label> */}
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" placeholder='Password' />
            {/* <label class="form-label" for="form1Example23" >Password</label> */}
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            {/* <!-- Checkbox --> */}
            {/* <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div> */}
            <a href="/user/forgetpassword">Forgot password?</a>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
          {/* <button type='cancel'>Cancel</button> */}

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a className="btn btn-outline-success"  href="/admin/addadmin"
            role="button">
            <i class="fab fa-facebook-f me-2" ></i>Register As Admin
          </a>
          <br/>
          

        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
