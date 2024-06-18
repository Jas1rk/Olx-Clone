import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import Logo from "/Images/olx-logo.png";
import { userContext } from "../../Storage/userContext";
import fireBaseContext from "../../Storage/FirebaseContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(userContext);
  const { firebaseapp } = useContext(fireBaseContext);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if ( user) {
        console.log(user)
        const db = getFirestore(firebaseapp);
        const userRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userRef);
        console.log("got the userRef",userRef);
        if (userDoc.exists) {
          console.log("UserData", userDoc.data());
          setUserData(userDoc.data());
        } else {
          console.log("No documents");
        }
      } else {
        console.log("cannot get the userdata");
      }
    };
    fetchData();
  }, [user, firebaseapp]);

  const handleLogout = (event) => {
    event.preventDefault();
    const authentication = getAuth(firebaseapp);
    authentication.signOut();
    setUserData(null);
    navigate("/login");
  };

  return (
    <div className="profileContainer">
      <div className="logo">
        <img width="100px" height="100px" src={Logo}></img>
      </div>

      <h2>Profile</h2>

      <div className="childContainer">
        {userData ? (
          <ul>
            <li>Name : {userData.displayName} </li>
            <br />
            <li>Email : {userData.email}</li>
            <br />
            <li>Mobile : {userData.mobile}</li>
          </ul>
        ) : (
          <p>Loading....</p>
        )}
      </div>
      <div className="back">
        <button onClick={(event) => handleLogout(event)}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
