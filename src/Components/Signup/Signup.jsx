import React from "react";
import Logo from "../../../public/Images/olx-logo.png";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signupParentDiv">
      <img width="200px" height="200px" src={Logo}></img>
      <form>
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
          id="fname"
          name="name"
          defaultValue="John"
        />
        <br />
        <label htmlFor="fname">Email</label>
        <br />
        <input
          className="input"
          type="email"
          id="fname"
          name="email"
          defaultValue="John"
        />
        <br />
        <label htmlFor="lname">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          id="lname"
          name="phone"
          defaultValue="Doe"
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
          className="input"
          type="password"
          id="lname"
          name="password"
          defaultValue="Doe"
        />
        <br />
        <br />
        <button>Signup</button>
      </form>
      <p>Already have an account ?</p>
      <a>Login</a>
    </div>
  );
};

export default Signup;
