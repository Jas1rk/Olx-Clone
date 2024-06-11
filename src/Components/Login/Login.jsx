import React from "react";
import Logo from "../../../public/Images/olx-logo.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginParentDiv">
      <img width="200px" height="200px" src={Logo}></img>
      <form>
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
          id="fname"
          name="name"
        
        />
        <br />
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          id="fname"
          name="email"
         
        />

        <br />
        <br />
        <button>Login</button>
      </form>
      <p> Don't have an account ?</p>
      <a>Sign up</a>
    </div>
  );
};

export default Login;