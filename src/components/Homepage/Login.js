// Import necessary dependencies and components
import React, { useState, useEffect } from 'react';
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
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[loading, setLoading]=useState(false);
  const [valid, isValid] = useState("false");

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement your login logic here

    try {
        const user = {
            email,
            password
        }
        
    
    const response = await axios.post("http://localhost:9321/login", user);
    
    localStorage.setItem("token", response.data.token)
    localStorage.setItem("login", true)
    setLoading(false)
    isValid("true");

    }catch(error){
        console.log(error.message);
    }

    
    
  };
  let login = "";
    useEffect(() => {
      login = localStorage.getItem("login");
  
      if (login === "true") {
        navigate("/dashboarditem");
      } else {
        console.log("Unsec");
      }
    }, [valid]);

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
          User Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          {/* Email input */}
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
          {/* Submit button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled ={loading}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
            {loading ? <CircularProgress size={20} color="inherit" /> : null}
          </Button>

          <Button
            // type="submit"
            fullWidth
            variant="contained"
            
            onClick={() => {
                setEmail("guest@example.com");
                setPassword("123456");
            }}
          >
            Get Dummy Credentials
            
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
