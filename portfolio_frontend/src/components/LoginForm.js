// LoginForm.js
import React, { useEffect, useState } from "react";
import "../css/LoginFormStyle.css";
import { FaTimes } from "react-icons/fa";
import { makePOSTRequest } from "../utils/serverHerlper";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["email"]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleLogin = async () => {
    const data = { email, password };
    const response = await makePOSTRequest("/auth/login", data);
    if (response.err) {
      alert(response.err);
      return;
    }
    const date = new Date();
    setCookie("email", email, { path: "/" });
    alert(response.message);
    navigate("/");
  };

  const closeLogin = () => navigate("/");

  return (
    <div>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div>
          <FaTimes size={30} onClick={closeLogin} className="close-menu" />
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
            <button type="submit" className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="additional">
            Don't have an account?
            <Link to={"/signup"}>
              <span>Create An Account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
