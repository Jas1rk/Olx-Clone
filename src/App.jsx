import { useContext, useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import { userContext } from "./Storage/userContext";
import fireBaseContext from "./Storage/FirebaseContext";
import { getAuth } from "firebase/auth";
import Profile from "./Components/Profile/Profile";

function App() {
  const { setUser } = useContext(userContext);
  const { firebaseapp } = useContext(fireBaseContext);

  useEffect(() => {
    const authnt = getAuth(firebaseapp);
    authnt.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/profile" element={ <Profile/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
