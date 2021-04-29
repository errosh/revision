import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import axios from "axios";
import { AuthContextProvider } from "./AuthContext/AuthContext";

axios.defaults.withCredentials = true;

ReactDom.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
