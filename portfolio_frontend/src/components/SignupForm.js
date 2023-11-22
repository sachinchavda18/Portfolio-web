// LoginForm.js
import React, { useEffect, useState } from "react";
import "../css/LoginFormStyle.css";
import { FaSmile, FaTimes } from "react-icons/fa";
import { makePOSTRequest } from "../utils/serverHerlper";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [cookies, setCookies] = useCookies(["email"]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleLogin = async () => {
    const data = { email, password, username };
    const response = await makePOSTRequest("/auth/register", data);
    if (response.err) {
      alert(response.err);
      return;
    }
    setCookies("email", email, { path: "/" });
    alert(response.message);
    navigate("/login");
  };

  const closeSignup = () => navigate("/");

  return (
    <div>
      <div className="modal-container">
        <div className="not-login">
          <div className="first-para">
            You Don't need to create account. only admin can login for upload
            new project.
          </div>
          <div >
          Thank you. <FaSmile style={{fontSize:"20px"}} />
          </div>
          <Link to={"/"} className="btn go-back-home">Go Back to Home </Link>
        </div>
      </div>
      <div className="modal-wrapper"></div>
       {/*
      <div className="modal-container">
        <div>
          <FaTimes size={30} onClick={closeSignup} className="close-menu" />
        </div>
        <div className="login-container">
          <div className="form" action="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email "
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password "
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter your Username "
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit" className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="additional">
          Already Have an Account?
            {
              <Link to={"/login"}>
                <span>Log In</span>
              </Link>
            }
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SignupForm;
