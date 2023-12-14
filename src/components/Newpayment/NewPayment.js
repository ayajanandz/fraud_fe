import React, { useState } from 'react';
import "./NewPayment.css";
import axios from 'axios';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    upiId: '',
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

    const { name, email, phno, upiId } = formData
    
        
    if( name && email && phno && upiId) {
        axios.post("http://localhost:9321/newpayment", formData, axiosConfig )
        .then( res => {alert(res.data.message)
         } )
        
        
    } else {
        alert("invalid input")
    }
    
    
  };

  return (
    <div className="registration-form">
      <h2>New Payment Form</h2>
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
          <label>UPI ID</label>
          <input
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
