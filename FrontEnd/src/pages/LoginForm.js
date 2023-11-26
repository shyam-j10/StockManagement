import React from 'react'
import "./css/LoginForm.css"
export default function LoginForm() {
  return (
    <div>
        

        <div class="logo text-center">
</div>
<div class="wrapper">
  <div class="inner-warpper text-center">
    <h4 class="title">Login to Your Account</h4>
    <form action="" id="formvalidate">
      <div class="input-group">
        <label class="palceholder" for="userName">User Name</label>
        <input class="form-control" name="userName" id="userName" type="text" placeholder="" >
        </input>
        <span class="lighting"></span>
      </div>
      <div class="input-group">
        <label class="palceholder" for="userPassword">Password</label>
        <input class="form-control" name="userPassword" id="userPassword" type="password" placeholder="" >

        </input>
        <span class="lighting"></span>
      </div>

      
      <div class="clearfix supporter">
        <div class="pull-left remember-me">
          <input id="rememberMe" type="checkbox"/>
          <label for="rememberMe">Remember Me</label>
        </div>
        <a class="forgot pull-right" href="/user/forgetpassword">Forgot Password?</a>
      </div>
      <br/>
      <button type="submit" id="login">Login</button>
    </form>
  </div>
  <div class="signup-wrapper text-center">
    <a href="/user/adduser">Don't have an accout? <span class="text-primary">Sign up</span></a>
  </div>
</div>

    </div>
  )
}