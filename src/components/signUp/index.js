import React from "react";
import "./signUp.css";
import insta from "../login/iii.png";
import apps from "../login/apps.png";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="App">
      <div className="regSub">
        <img className="insattr" src={insta} />
        <button className="signup">Log in with Facebook</button> <br />
        <br />
        <div className="textttr">
          <TextField
            id="outlined-multiline-flexible"
            label="Mobile Number or Email"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <TextField
            id="outlined-multiline-flexible"
            label="Full Name"
            multiline
            maxRows={4}
            value={value}
            onChange={handleChange}
          />{" "}
          <br /> <br />
          <TextField
            id="outlined-multiline-flexible"
            label="Username"
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
        <button className="signup">Sign Up</button>
        <br />
        <br />
      </div>
      <div className="signupSub2">
        <h5 className="sorforgr">
          {" "}
          Have an account? <span className="loginpaa">Log in</span>
        </h5>
      </div>
      <h5 className="sorforgr">Get the app.</h5>
      <img className="appdsr" src={apps} />
    </div>
  );
};

export default Register;
