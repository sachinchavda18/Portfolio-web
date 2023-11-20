import "../css/FormStyle.css";

import React from "react";

const Form = () => {
  return (
    <div className="form">
      <label htmlFor="name">Your Name</label>
      <input type="text" name="name" placeholder="Enter Your name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" placeholder="abc@abc.com"/>
      <label htmlFor="msg">Message</label>
      <textarea
        name="msg"
        id=""
        rows="3"
        placeholder="Type Your Message here."
      ></textarea>
      <button className="btn">Submit</button>
    </div>
  );
};

export default Form;

// Install axios using: npm install axios
// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:3001/send-email', formData);
//       alert(response.data);
//     } catch (error) {
//       alert('Error sending email:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

//       <label htmlFor="message">Message:</label>
//       <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

//       <button type="submit" className="btn">Submit</button>
//     </form>
//   );
// };

// export default ContactForm;
