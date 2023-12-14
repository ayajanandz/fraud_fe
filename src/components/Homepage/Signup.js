// Import necessary dependencies and components
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";

// Login component
const Login = () => {
  // State for email and password
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    // TODO: Implement your login logic here
    if(password != rePassword){
        setLoading(false)
        alert("Password mismatch")
    } else{
    try {
        const user = {
            name,
            email,
            password,
            
        }
        const response = await axios.post("http://localhost:9321/register", user);
        console.log(response.data.body);
        setLoading(false)
        setEmail('')
        setName('')
        setPassword('')
        setRePassword('')
        alert("Registration Succesfull Login Again !")

    }catch(error) {
        console.log(error.message)
    }
}
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/* Email input */}

          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Enter your Name"
            name="email"
            
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password input */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

<TextField
            margin="normal"
            required
            fullWidth
            name="rePassword"
            label="Re Enter Password "
            type="password"
            id="password"
            autoComplete="current-password"
            value={rePassword}
            onChange={(e) => setRePassword(e.target.value)}
          />
          {/* Submit button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled = {loading}
            sx={{ mt: 3, mb: 2 }}
          > 
            Sign Up
            
            {loading ? <CircularProgress size={20} color="inherit" /> : null}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
