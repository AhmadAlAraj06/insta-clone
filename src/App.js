import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
const App2 = () => {
  let history = useHistory();
  const main = () => {
    history.push("./");
  };
  const profile = () => {
    history.push("./profile");
  };
  const home = () => {
    history.push("./home");
  };
  const login = () => {
    history.push("./login");
  };
  const register = () => {
    history.push("./register");
  };
  return (
    <div className="App">
      <button onClick={main}>Main</button>
      <button onClick={home}>Home</button>
      <button onClick={profile}>Profile</button>
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
    </div>
  );
};

export default App2;
