import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import fireBaseContext from "./Storage/FirebaseContext.jsx";
import firebase from "./Firebase/Firebase.jsx";
import { UserContextProvider } from "./Storage/userContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <fireBaseContext.Provider value={{ firebaseapp: firebase }}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </fireBaseContext.Provider>
);
