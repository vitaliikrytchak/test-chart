import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLogin } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      if (state.username === username && state.pass === password) {
        dispatch(getLogin());
        navigate("/");
      } else {
        setErrorMessages("Wrong password or login, please try again");
      }
    } else {
      setErrorMessages("Please enter your login or password");
    }

    setPassword("");
  };

  const renderErrorMessage = () => <div className="error">{errorMessages}</div>;

  return (
    <div className="login">
      <h2 className="title">Sign In</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {setUsername(e.target.value);setErrorMessages("")}}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {setPassword(e.target.value);setErrorMessages("")}}
        />
        {renderErrorMessage()}

        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      <div className="creds">
        Test credentials: <br />
        user: <span>upworkTest</span> <br />
        pass: <span>2022</span>
      </div>
    </div>
  );
};

export default Login;
