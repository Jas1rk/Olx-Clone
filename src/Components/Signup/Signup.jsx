import React, { useContext, useState } from "react";
import Logo from "/Images/olx-logo.png";
import "./Signup.css";
import UseForm from "../../Hooks/UseForm";
import fireBaseContext from "../../Storage/FirebaseContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio } from "react-loader-spinner";

const Signup = () => {
  const { firebaseapp } = useContext(fireBaseContext);
  const [loding, setLoding] = useState(false);
  const [value, handleInput] = UseForm({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });
  const { username, email, mobile, password } = value;
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const auth = getAuth(firebaseapp);
    const dataBase = getFirestore(firebaseapp);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;
      const useRef = collection(dataBase, "users");

      const userData = {
        uid: user.uid,
        username: username,
        email: email,
        mobile: mobile,
        password: password,
      };
      addDoc(useRef, userData);
      console.log("userCreated ", useRef, userData);
      toast.success("Signed successfully");
      setLoding(true);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters", {
          closeButton: true,
          autoClose: false,
          progressBar: false,
        });
      } else if (error.code === "auth/email-already-in-use") {
        toast.error("Email already exists", {
          closeButton: true,
          autoClose: false,
          progressBar: false,
        });
      } else {
        toast.error("Something went wrong, Please try again later", {
          closeButton: true,
          autoClose: false,
          progressBar: false,
        });
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="signupParentDiv">
        {loding ? (
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
            <form onSubmit={handleSubmit}>
              <br />
              <input
                className="input"
                type="text"
                value={username}
                onChange={handleInput}
                id="fname"
                name="username"
                placeholder="Username"
              />
              <br />

              <br />
              <input
                className="input"
                type="email"
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
                type="number"
                id="lname"
                name="mobile"
                value={mobile}
                onChange={handleInput}
                placeholder="Mobile"
              />
              <br />

              <br />
              <input
                className="input"
                type="password"
                id="lname"
                name="password"
                value={password}
                onChange={handleInput}
                placeholder="Password"
              />
              <br />
              <br />
              <button>Signup</button>
            </form>
            <p>Already have an account ?</p>
            <Link to={"/login"}>Login</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Signup;
