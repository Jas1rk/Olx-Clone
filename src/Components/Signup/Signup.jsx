import React, { useContext, useState } from "react";
import Logo from "/Images/olx-logo.png";
import "./Signup.css";
import UseForm from "../../UseForm";
import fireBaseContext from "../../Storage/FirebaseContext";
import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

const Signup = () => {
  const { firebaseapp } = useContext(fireBaseContext);
  const [value, handleInput] = UseForm({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const { username, email, mobile, password } = value;

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth(firebaseapp)
    createUserWithEmailAndPassword(auth,email, password)
    .then((result) => {
      result.user.updateProfile({ displayName: username });
    })
    .catch(error => console.log('error in ',error))
  };

  return (
    <div className="signupParentDiv">
      <img width="200px" height="200px" src={Logo}></img>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">Username</label>
        <br />
        <input
          className="input"
          type="text"
          value={username}
          onChange={handleInput}
          id="fname"
          name="username"
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
          value={email}
          onChange={handleInput}
          defaultValue="John"
        />
        <br />
        <label htmlFor="lname">Phone</label>
        <br />
        <input
          className="input"
          type="number"
          id="lname"
          name="mobile"
          value={mobile}
          onChange={handleInput}
        />
        <br />
        <label htmlFor="lname">Password</label>
        <br />
        <input
          className="input"
          type="password"
          id="lname"
          name="password"
          value={password}
          onChange={handleInput}
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
