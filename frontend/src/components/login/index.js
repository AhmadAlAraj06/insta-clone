import React from "react";
import "./login.css";
import insta from "./iii.png";
import apps from "./apps.png";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  let history = useHistory();

  return (
    <div className="App">
      <div className="loginSub">
        <img className="insatt" src={insta} />
        <div className="texttt">
          <TextField
            id="outlined-multiline-flexible"
            label="Phone number, username, or email"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <TextField
            id="outlined-multiline-flexible"
            label="Password"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />
        </div>{" "}
        <br />
        <button className="loginn">Log In</button>
        <div class="separator">
          <div class="line"></div>
          <h4 className="sor">OR</h4>
          <div class="line"></div>
        </div>
        <h5 className="sorfac">Log in with Facebook</h5>
        <h6 className="sorforg">Forgot password?</h6>
      </div>
      <div className="loginSub2">
        <h5 className="sorforg"> Don't have an account? <span className="signUpaa">Sign up</span></h5>
      </div>
	  <h5 className="sorforg">Get the app.</h5>
	<img className="appds" src={apps}/>

    </div>
  );
};

export default Login;
