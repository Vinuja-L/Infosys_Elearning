import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../Authentication/Authentication.css";
import { Grid, TextField, Box, Button, Typography } from "@mui/material";

function Registration() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(3).max(15).required(),
    lastname: Yup.string().min(3).max(15).required(),
    email: Yup.string().min(13).max(30).required(),
    password: Yup.string().min(3).max(15).required(),
    role: Yup.string().min(4).max(8).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3002/auth", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
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
                  Create New Account
                </Typography>

                <Typography
                  color="#E8E1FA"
                  variant="h7"
                  padding={0.2}
                  textAlign="center"
                  fontFamily="Abril Fatface"
                >
                  Already have an Account?
                </Typography>
              </Grid>

              <label>Firstname: </label>
              <ErrorMessage name="firstname" component="span" />
              <Field
                autocomplete="off"
                name="firstname"
                placeholder="Your firstname"
              />

              <label>Lastname: </label>
              <ErrorMessage name="lastname" component="span" />
              <Field
                autocomplete="off"
                name="lastname"
                placeholder="Your lastname"
              />

              <label>Email: </label>
              <ErrorMessage name="email" component="span" />
              <Field
                autocomplete="off"
                name="email"
                placeholder="Your mail"
              />

              <label> Password: </label>
              <ErrorMessage name="password" component="span" />
              <Field
                autocomplete="off"
                name="password"
                type="password"
                placeholder="Your password"
              />

              <label>Role:</label>
              <ErrorMessage name="role" component="span" />
              <Field as="select" id="inputCreatePost" name="role">
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </Field>

              <button type="submit"> Create </button>
            </Grid>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
export default Registration;
