import React, { useContext } from "react";
import AuthContext from "../AuthContext/AuthContext";
import axios from "axios";
import { useHistory } from "react-router-dom";
export default function Home() {
  let history = useHistory();
  const { userInfo, getLoginInfo } = useContext(AuthContext);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:8000/logout")
      .then((res) => {
        console.log(res.data.success);
        if (res.data.success) {
          getLoginInfo();
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h2>Welcome,{userInfo && userInfo.username}</h2>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
