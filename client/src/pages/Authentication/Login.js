import { Box, TextField, Typography, Button, Grid} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Authentication/Authentication.css";
import axios from "axios";  
import Loginimg from "../../images/loicon.png";

/**
   * Function for handling login form submission.
   * Sends an HTTP POST request to the server with the login credentials,
   * and saves the access token to session storage if login is successful.
*/

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {

    const data = { email: email, password: password };
    axios.post("http://localhost:3002/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);      
      } else {
        sessionStorage.setItem("accessToken", response.data);
      }
    });
  };

  return (
    <Grid container spacing={3}>
        {/* Left grid item for page header */}
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

       {/* Right grid item for login form */}
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
            background:
              " radial-gradient(circle,#b25000,#FF7300,#ff8f33,#FF7300)",
          }}
        >
          <img src={Loginimg} width="110px" />
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
          <Typography
            variant="body2"
            alignSelf="flex-end"
            color="blue"
            component={Link}
            to={"/Forgotpassword"}
          >
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
            style={{
              textAlign: "center",
              fontFamily: "Abril Fatface",
              padding: "16px",
            }}
          >
            New to EduLab Pro ? {""}
            <Link to={"/Registration"}>
              <i style={{ marginLeft: "8px" }}>Create New Account</i>
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
