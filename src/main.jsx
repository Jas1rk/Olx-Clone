import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import fireBaseContext from "./Storage/FirebaseContext.jsx";
import firebase  from "./Firebase/Firebase.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <fireBaseContext.Provider value={{firebaseapp:firebase}}>
    <App />
  </fireBaseContext.Provider>
);
