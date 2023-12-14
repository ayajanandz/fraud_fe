import React, { useState } from "react";
import "./NewFraud.css";
import axios from "axios";

function FraudForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    badId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json', // Set the Content-Type header if sending JSON data
      'authorization': `bearer ${localStorage.getItem('token')}`, // Include any other headers you need
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phno, badId } = formData;

    if (name && email && phno && badId) {
      axios
        .post("http://localhost:9321/registerfraud", formData, axiosConfig)
        .then((res) => {
          alert(res.data.message);
        });
      
    } else {
      alert("invalid input");
    }

    console.log(formData);
  };

  return (
    <div className="registration-form">
      <h2>New fraud</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phno"
            value={formData.phno}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Report Fraud UPI ID</label>
          <input
            type="text"
            name="badId"
            value={formData.badId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FraudForm;
