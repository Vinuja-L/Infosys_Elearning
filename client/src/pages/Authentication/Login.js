import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import "../Authentication/Authentication.css";
import axios from "axios";
import Loginimg from "../../images/loicon.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = { email: email, password: password };
    axios.post("http://localhost:3002/auth/login", data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Typography
          variant="h3"
          marginTop={30}
          marginLeft={{ md: 5, lg: 7, xl: 10 }}
          padding={5}
          textAlign="left"
          fontSize="70px"
          fontFamily="Abril Fatface"
          sx={{
            color: "#FF7300",
          }}
        >
          <b> Welcome to edulab pro </b>
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="fit-content"
          alignItems="center"
          justifyContent="center"
          margin={2}
          marginTop={10}
          padding={5}
          borderRadius={5}
          sx={{
            background: " radial-gradient(circle,#b25000,#FF7300,#ff8f33,#FF7300)",
          }}
        >
          <img src={Loginimg} width="140px" />
          <Typography
            color="FF7300"
            variant="h6"
            padding={1}
            textAlign="center"
          >
            <b>LOGIN</b>
          </Typography>

          <TextField
            size="small"
            sx={{
              "& fieldset": { border: "none" },

              input: {
                color: "#8C8B8B",
                bgcolor: "#fff",
                borderRadius: "10px",
                width: "100%",
                margin: "normal",
              },
            }}
            type="text"
            variant="outlined"
            placeholder="Your email"
            name="email"
            margin="normal"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />

          <TextField
            size="small"
            sx={{
              "& fieldset": { border: "none" },

              input: {
                color: "#8C8B8B",
                bgcolor: "#fff",
                borderRadius: "10px",
                width: "100%",
                margin: "normal",
              },
            }}
            type="password"
            variant="outlined"
            placeholder="Your password"
            name="password"
            margin="normal"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <Typography variant="body2" alignSelf="flex-end" color="blue">
            <i>Forgot password</i>
          </Typography>

          <Button
            sx={{
              marginTop: 3,
              borderRadius: 3,
              bgcolor: "black",
              fontFamily: "Abril Fatface",
              color: "white",
            }}
            type="submit"
            variant="contained"
            onClick={login}
          >
            Login
          </Button>

                
                <Typography
               
                variant="h6"
                padding={2}
                textAlign="center"
                fontFamily="Abril Fatface"
                
              >
                 New to EduLab Pro ?
                 <i> Create New Account</i>
                
            </Typography>
      </Box>
      </Grid>
      </Grid>
    
   
  );
};

export default Login