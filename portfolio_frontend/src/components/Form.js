import "../css/FormStyle.css";

import React, { useState } from "react";
import SuccessMsg from "./SuccessMsg";
import ErrorMsg from "./ErrorMsg";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setSuccess("Your details have been successfully submitted.");
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 2000);
    } catch (err) {
      setError("Error submitting form");
    }
  };
  const closeErrorSuccess = () => {
    if (error) {
      setError("");
    }
    if (success) {
      setSuccess("");
    }
  };

  return (
    <form
      className="form"
      action="https://formspree.io/f/meqbbqwe"
      method="post"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Your Name</label>
      <input type="text" name="name" placeholder="Enter Your name" required />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="abc@abc.com" required />
      <label htmlFor="msg">Message</label>
      <textarea
        name="msg"
        id=""
        rows="3"
        placeholder="Type Your Message here."
      ></textarea>
      <button className="btn">Submit</button>
      {success && (
        <SuccessMsg successText={success} closeSuccess={closeErrorSuccess} />
      )}
      {error && <ErrorMsg errText={error} closeError={closeErrorSuccess} />}
    </form>
  );
};

export default Form;
