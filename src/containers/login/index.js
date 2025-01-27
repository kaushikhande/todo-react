import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    console.log('hrhheheh')
    const { email, value } = e.target;
    setFormData({ ...formData, [email]: value });
  };

  const login = async () => {
    const response = await axios.post('api/v1/auth/login', {
      email: formData.email,
      password: formData.password
    }).then(function(response) {
      console.log(response)
       const token = response.data.token;
       console.log(token)
       localStorage.setItem("jwtToken", token);
    }).catch(function(error) {
      console.log(error);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    login();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Card sx={{ maxWidth: 400, width: "100%" }}>
        <CardHeader
          title="Login"
          titleTypographyProps={{ align: "center", variant: "h5" }}
        />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="Email"
                name="email"
                type="email"
                fullWidth
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="Password"
                name="password"
                type="password"
                fullWidth
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                Login
              </Button>
            </Box>
          </form>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Typography variant="body2">
              Don’t have an account? <a href="#">Sign Up</a>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
