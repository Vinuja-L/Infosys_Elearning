import { TextField, Box, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "../Authentication/Authentication.css";


const Verification = () => {
  const CHARACTER_LIMIT = 1;
  const [values, setValues] = React.useState({

  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

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
          <Grid container direction="column">
            <Grid container direction="column">
              <Typography
                color="#E8E1FA"
                variant="h4"
                padding={2}
                textAlign="center"
                fontFamily="Abril Fatface"
              >
                Verification
              </Typography>
            </Grid>

            <Grid textAlign="center" padding={3}>
              <Typography
                color="#E8E1FA"
                variant="h6"
                fontFamily="Abril Fatface"
              >
                Enter Verification Code
              </Typography>
              <Grid
                container
                spacing={1}
                marginTop={1}
                marginBottom={8}
                alignContent="center"
              >
                <Grid item sm={3}>
                  <TextField
                    sx={{
                      input: {
                        color: "#8C8B8B",
                        bgcolor: "#fff",
                        borderRadius: "30px",
                        width: "20px",
                        height: "15px",
                      },
                    }}
                    inputProps={{ maxlength: CHARACTER_LIMIT }}
                    margin="normal"
                    textAlign="center"
                    type={"text"}
                    variant="outlined"
                    placeholder="1"
                    value={values.name}
                    onChange={handleChange("name")}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    sx={{
                      input: {
                        color: "#8C8B8B",
                        bgcolor: "#fff",
                        borderRadius: "30px",
                        width: "20px",
                        height: "15px",
                      },
                    }}
                    inputProps={{ maxlength: CHARACTER_LIMIT }}
                    margin="normal"
                    textAlign="center"
                    type={"text"}
                    variant="outlined"
                    placeholder="2"
                    value={values.name}
                    onChange={handleChange("name")}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    sx={{
                      input: {
                        color: "#8C8B8B",
                        bgcolor: "#fff",
                        borderRadius: "30px",
                        width: "20px",
                        height: "15px",
                      },
                    }}
                    inputProps={{ maxlength: CHARACTER_LIMIT }}
                    margin="normal"
                    textAlign="center"
                    type={"text"}
                    variant="outlined"
                    placeholder="3"
                    value={values.name}
                    onChange={handleChange("name")}
                  />
                </Grid>
                <Grid item sm={3}>
                  <TextField
                    sx={{
                      input: {
                        color: "#8C8B8B",
                        bgcolor: "#fff",
                        borderRadius: "30px",
                        width: "20px",
                        height: "15px",
                      },
                    }}
                    inputProps={{ maxlength: CHARACTER_LIMIT }}
                    margin="normal"
                    textAlign="center"
                    type={"text"}
                    variant="outlined"
                    placeholder="4"
                    value={values.name}
                    onChange={handleChange("name")}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Typography
              align="center"
              variant="h7"
              color="#E8E1FA"
              marginBottom={10}
              fontFamily="Abril Fatface"
            >
              Didn't Receive a code? Resend
              <Link href="#">Resend</Link>
            </Typography>
          </Grid>

          <Grid padding={3}>
            <Button
              sx={{
                marginTop: 3,
                borderRadius: 4,
                color: "black",
                bgcolor: "#fafafa",
                fontFamily: "Abril Fatface",
              }}
              LinkComponent={Link}
              to={"/newpassword"}
              variant="contained"
              color="warning"
            >
              <b>Verify this </b>
            </Button>
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default Verification;
