import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ user: "" });
  const getLoginInfo = async () => {
    await axios
      .get("http://localhost:8000/islogin")
      .then((res) => {
        setIsLoggedIn(res.data.islogin);
        setUserInfo(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getLoginInfo();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userInfo, getLoginInfo }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
