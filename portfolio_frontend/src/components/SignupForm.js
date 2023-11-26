// LoginForm.js
import React, { useEffect, useState } from "react";
import "../css/LoginFormStyle.css";
import { FaEye, FaEyeSlash, FaSmile, FaTimes } from "react-icons/fa";
import { makePOSTRequest } from "../utils/serverHerlper";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import ErrorMsg from "./ErrorMsg";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [cookie, setCookie] = useCookies(["email"]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const data = { email, password, username, confirmPassword };
      if (password !== confirmPassword) {
        setError("Passwords does not match!");
        return;
      }
      const response = await makePOSTRequest("/auth/register", data);
      if (response.err) {
        setError(response.err);
        return;
      }
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 10 * 60 * 1000);

      setCookie("email", encodeEmail(email), {
        path: "/",
        expires: expirationDate,
      });
      // alert(response.message);
      navigate("/login");
    } catch (error) {
      setError(error);
    }
  };
  const closeError = () => {
    setError(""); // Clear the error when closing
  };
  const closeSignup = () => {
    closeError(); // Close the error when closing the login form
    navigate("/");
  };
  const handleInputChange = () => {
    closeError(); // Clear the error when the user starts typing
  };

  const encodeEmail = (email) => {
    return email
      .split("")
      .map((char) => String.fromCharCode(char.charCodeAt(0) + 2))
      .join("");
  };
  // const decodeEmail = (encodedEmail) => {
  //   return encodedEmail.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 2)).join('');
  // };

  return (
    <div>
      {/* <div className="modal-container">
        <div className="not-login">
          <div className="first-para">
            You Don't need to create account. only admin can login for upload
            new project.
          </div>
          <div>
            Thank you. <FaSmile style={{ fontSize: "20px" }} />
          </div>
          <Link to={"/"} className="btn go-back-home">
            Go Back to Home{" "}
          </Link>
        </div>
      </div> */}
      <div className="modal-wrapper"></div>

      <div className="modal-container">
        <div>
          <FaTimes size={30} onClick={closeSignup} className="close-menu" />
        </div>
        <div className="login-container">
          <div className="form" action="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter your Username "
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                handleInputChange();
              }}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email "
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                handleInputChange();
              }}
            />
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password "
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleInputChange();
                }}
              />
              {showPassword ? (
                <FaEyeSlash
                  size={20}
                  style={{ color: "white", right: " 3rem", bottom: "17.8rem" }}
                  className="password-eye"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  size={20}
                  style={{ color: "white", right: " 3rem", bottom: "17.8rem"  }}
                  className="password-eye"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password again "
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  handleInputChange();
                }}
              />
              {showPassword ? (
                <FaEyeSlash
                  size={20}
                  style={{ color: "white" , right: " 3rem", bottom: "11.8rem" }}
                  className="password-eye"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <FaEye
                  size={20}
                  style={{ color: "white" , right: " 3rem", bottom: "11.8rem" }}
                  className="password-eye"
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            {error && <ErrorMsg errText={error} closeError={closeError} />}

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
      </div>
    </div>
  );
};

export default SignupForm;
