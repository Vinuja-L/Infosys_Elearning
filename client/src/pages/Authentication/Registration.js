import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
  const initialValues = {
            firstname:"",
            lastname:"",
            email: "",
            role: "",
            password:"",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(3).max(15).required(),
    lastname: Yup.string().min(3).max(15).required(),
    email: Yup.string().min(13).max(20).required(),
    role: Yup.string().min(4).max(8).required(),
    password: Yup.string().min(3).max(15).required(),

  });

  const onSubmit =(data) =>{
    axios.post("http://localhost:3002/auth",data).then(() =>{
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
         
          <label>Firstname: </label>
          <ErrorMessage name="firstname" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="firstname"
            placeholder="Your firstname"
          />

        <label>Lastname: </label>
          <ErrorMessage name="lastname" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="lastname"
            placeholder="Your lastname"
          />

       <label>Email: </label>
          <ErrorMessage name="email" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="email"
            placeholder="Your mail"
          />

        <label> Role: </label>
          <ErrorMessage name="role" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="role"
            
          />

          
        <label> Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            autocomplete="off"
            id="inputCreatePost"
            name="password"
            placeholder="Your password"
            
          />

          <button type="submit"> Create </button>
        </Form>
      </Formik>


    </div>
  )
}

export default Registration