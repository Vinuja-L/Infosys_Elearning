import "../Authentication/Authentication.css";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SuccesfulPwReset = () => {
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={500}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={10}
          boxShadow={"5px 5px 10px #ccc"}
          bgcolor="#27144B"
          sx={{
            background:
              " radial-gradient(circle,#b25000,#FF7300,#ff8f33,#FF7300)",
          }}
        >
          <Grid container direction="column" alignContent={"center"}>
            <Typography
              color="#E8E1FA"
              variant="h5"
              padding={4}
              textAlign="center"
              fontFamily="Abril Fatface"
            >
              Sucessful password Reset
            </Typography>
            <Typography
              color="blue"
              variant="h7"
              alignContent={"center"}
              marginLeft={"100px"}
              component={Link}
              to={"/"}
            >
              click to Login
            </Typography>
          </Grid>

          <Grid pt={5} pb={5} textAlign={"center"}>
            <Typography variant="h8" color="#E8E1FA" fontFamily="Abril Fatface">
              You can now <br /> use your new password to <br /> Login to your
              account! <Link href="#">Resend Confirmation mail</Link>
            </Typography>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default SuccesfulPwReset;
