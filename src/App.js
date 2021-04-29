import React, { useContext } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext";

function App() {
  let { isLoggedIn } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={isLoggedIn ? Home : Login} />
        <Route
          exact
          path="/register"
          component={isLoggedIn ? Home : Register}
        />
        <Route exact path="/home" component={!isLoggedIn ? Login : Home} />
      </Switch>
    </Router>
  );
}

export default App;
