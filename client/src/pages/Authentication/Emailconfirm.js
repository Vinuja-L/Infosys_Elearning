import { Box, Typography, Grid, Link, Icon } from "@mui/material";
import "../Authentication/Authentication.css";
import React from "react";

const Emailconfirm = () => {
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
          {/*<img src={pass} width='180px'/>*/}

          <Grid container direction="column">
            <Grid>
              <Typography
                color="#E8E1FA"
                variant="h5"
                padding={4}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                E-mail Confirmation
              </Typography>
            </Grid>
            <Typography
              color="#E8E1FA"
              variant="h7"
              padding={0.2}
              textAlign="center"
              fontFamily="Abril Fatface"
            >
              We have sent email to your Email Id <br />
              to confirm the validity of our email address.
              <br />
              After receiving the email you have to follow the link provided to
              complete your registration.
            </Typography>
          </Grid>

          <Grid padding={2}>
            <hr width="500px" color="white" alignItems="center"></hr>
          </Grid>

          <Grid>
            <Typography
              variant="h8"
              align="center"
              color="#E8E1FA"
              fontFamily="Abril Fatface"
            >
              If you not got any E-mail?{" "}
              <Link href="#"> Resend Confirmation mail </Link>{" "}
            </Typography>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default Emailconfirm;
