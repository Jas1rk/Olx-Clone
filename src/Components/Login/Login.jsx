import React, { useContext, useState } from "react";
import Logo from "/Images/olx-logo.png";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import UseForm from "../../UseForm";
import fireBaseContext from "../../Storage/FirebaseContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Audio } from "react-loader-spinner";

const Login = () => {
  const { firebaseapp } = useContext(fireBaseContext);
  const [loading, setLoding] = useState(false);
  const navigate = useNavigate();
  const [value, handleInput] = UseForm({
    email: "",
    password: "",
  });
  const { email, password } = value;

  const handleLogin = async (event) => {
    event.preventDefault();
    const auth = getAuth(firebaseapp);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoding(true);
      navigate("/");
    } catch (error) {
      toast.error("Enter valid email and password");
    }
  };
  return (
    <>
      <ToastContainer />
    <div className="loginParentDiv">
      {loading ? (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <>
          <img width="200px" height="200px" src={Logo}></img>
          <form onSubmit={handleLogin}>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="email"
              value={email}
              onChange={handleInput}
              placeholder="Email"
            />
            <br />

            <br />
            <input
              className="input"
              type="password"
              id="fname"
              name="password"
              value={password}
              onChange={handleInput}
              placeholder="Password"
            />

            <br />
            <br />
            <button>Login</button>
          </form>
          <p> Don't have an account ?</p>
          <Link to={"/signup"}>Sign up</Link>
        </>
      )}
    </div>
    </>
  );
};

export default Login;
