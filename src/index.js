import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/main";
import App from "./App";
import { Route } from "react-router-dom";
import Login from "./components/login/index";
import Register from "./components/signUp/index";
import Home from "./components/home/index";
import profile from "./components/profile/index";

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
    <Route exact path="/" component={Main} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/profile" component={profile} />
  </Router>,
  document.getElementById("root")
);
