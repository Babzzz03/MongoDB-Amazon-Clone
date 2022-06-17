import React, { useState } from "react";
import "./Login.css";
import "./CreateAccount.css";

import { Link, useHistory } from "react-router-dom";

import blacklogo from "./images/blacklogo.png";
import { useStateValue } from "./StateProvider";
import { axiosInstance } from "./Config";


function Login() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasaword] = useState("");
  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
   const [error3, setError3] = useState("");
     const [error4, setError4] = useState("");




  async function register(e) {
 e.preventDefault();
    axiosInstance
      .post(`/v1/auth/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
           
             alert("Account created successfully, Welcome!!");
           
        history.push("/");
      })
       .catch((err) => {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (err.response) {
          setError4(err.response.data.msg);
          setError(err.response.data.msg1);
          setError2(err.response.data.msg2);
          setError3(err.response.data.msg3);
        
        }
      });
  }






  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src = { blacklogo }
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Create-Account</h1>
        <p className={error4 ? "create__active__alert2" : "create__alert2"}>
          {error4}
        </p>
        <div>
          <h5>Username</h5>
          <input
            type="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className={error3 ? "create__active__alert1" : "create__alert1"}>
            {error3}
          </p>
          <h5>E-mail</h5>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className={error ? "create__active__alert2" : "create__alert2"}>
            {error}
          </p>
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPasaword(e.target.value)}
          />
          <p className={error2 ? "create__active__alert2" : "create__alert2"}>
            {error2}
          </p>
          <button
            type="submit"
            onClick={register}
            className="login__signInButton"
          >
            create account
          </button>
        </div>

        <p>
          By creating an account, you agree to Amazon's Conditions of Use and
          Privacy Notice.
        </p>
        <h3>
          Already have an account? <Link to="/login">sign-in</Link>
        </h3>
      </div>
    </div>
  );
}

export default Login;
