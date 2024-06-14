import React from "react";
import Logo from "/Images/olx-logo.png";
import "./Login.css";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="loginParentDiv">
      <img width="200px" height="200px" src={Logo}></img>
      <form>
        <label htmlFor="fname">Username</label>
        <br />
        <input className="input" type="text" id="fname" name="name" />
        <br />
        <label htmlFor="fname">Email</label>
        <br />
        <input className="input" type="email" id="fname" name="email" />

        <br />
        <br />
        <button>Login</button>
      </form>
      <p> Don't have an account ?</p>
      <Link to={'/signup'}>Sign up</Link>
    </div>
  );
};

export default Login;
