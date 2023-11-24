import "../css/FormStyle.css";

import React from "react";

const Form = () => {
  const handleSubmit = () => {
    alert("Thank you! Your details have been successfully submitted.");
  };
  
  return (
    <form className="form" action="https://formspree.io/f/meqbbqwe" method="post" onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input type="text" name="name" placeholder="Enter Your name" required/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="abc@abc.com" required/>
      <label htmlFor="msg">Message</label>
      <textarea
        name="msg"
        id=""
        rows="3"
        placeholder="Type Your Message here."
      ></textarea>
      <button className="btn">Submit</button>
    </form>
  );
};

export default Form;