import React, { useState } from 'react';
import "./NewPayment.css";
import axios from 'axios';

function RegistrationForm(props) {
  const {setOpenPopup } = props;
  const [otp, setOtp] = useState();
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

  const handleSubmit = async(e) => {
    e.preventDefault();

    const { name, email, phno, upiId } = formData
    
        // This part is responsible for calling the backend to generate a OTP
    if( name && email && phno && upiId) {
       const response = await axios.get("http://localhost:9321/otpVerification", axiosConfig);
       const otp = response.data.body
      // A prompt has been used to display the OTP as well as to get the otp from the user.
       const userInput = prompt("Your Transaction is in queue. To proceed enter the OTP:  "+otp);
       if(userInput==otp){
        // If the opt generated by the backend and the otp entered by the user in the promp matches then new payment method is called.
       handlePayment();
       }
       else{
        alert("OTP does not matches")
       }
      setOpenPopup(false);
        
    } else {
        alert("invalid input")
    }
    
    
  };

  const handlePayment = async(e) => {
    // e.preventDefault();
    try{
    const res = await axios.post("http://localhost:9321/newpayment", formData, axiosConfig);
    alert(res.data.message)
    } catch(error){
      console.log(error.message);
    }

    // const { name, email, phno, upiId } = formData
    
        
    // if( name && email && phno && upiId) {
    //     axios.post("http://localhost:9321/newpayment", formData, axiosConfig )
    //     .then( res => {alert(res.data.message)
    //      } )
        
        
    // } else {
    //     alert("invalid input")
    // }
    
    
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
