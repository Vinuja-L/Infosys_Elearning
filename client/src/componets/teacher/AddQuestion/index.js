import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import {
  FormLabel,
  Grid,
  CardContent,
  FormControl,
  Select,
} from "@mui/material";
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

export default function AddQuestion({ dataState, setDataState }) {
  const [open, setOpen] = React.useState(false);
  // const [formValues, setFormValues] = useState({});
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState();

  // const handleInputChange = (e, isNumber) => {
  //   const { name, value } = e.target;

  //   setFormValues({
  //     ...formValues,
  //     [name]: isNumber ? Number(value) : value,
  //   });
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e, isNumber) => {
    e.preventDefault();
    const data = {
      question,
      option1,
      option2,
      option3,
      option4,
      answer,
    };

    axios
      .post("http://localhost:8080/api/questions", data)
      .then((response) => {
        console.log(response, "sucess insert");
        // do something with the response, such as show a success message
      })
      .catch((error) => {
        console.log(error);
        // handle the error, such as showing an error message
      });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        + AddQuestion
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Box
          component="form"
          fullWidth
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{backgroundColor:"#f0f0f0"}}
        >
          <DialogTitle>AddQuestion</DialogTitle>
          <DialogContent dividers>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <br />
            <Box>
              <FormLabel>TypeQuestion</FormLabel>
              <TextField
                id="TypeQuestion"
                name="TypeQuestion"
                type="text"
                fullWidth
                variant="standard"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
              />
              <FormLabel>option1</FormLabel>
              <TextField
                name="option1"
                id="option1"
                fullWidth
                variant="standard"
                value={option1}
                onChange={(event) => setOption1(event.target.value)}
              />
              <FormLabel>option2</FormLabel>
              <TextField
                name="option2"
                id="option2"
                fullWidth
                variant="standard"
                value={option2}
                onChange={(event) => setOption2(event.target.value)}
              />
              <FormLabel>option3</FormLabel>
              <TextField
                name="option3"
                id="option3"
                fullWidth
                variant="standard"
                value={option3}
                onChange={(event) => setOption3(event.target.value)}
              />
              <FormLabel>option4</FormLabel>
              <TextField
                name="option4"
                id="option4"
                fullWidth
                variant="standard"
                value={option4}
                onChange={(event) => setOption4(event.target.value)}
              />
              {/* <FormLabel>Correct Answer</FormLabel> */}
              {/* <TextField
                name="AnswerOption"
                id="AnswerOption"
                fullWidth
                variant="standard"
                value={answer}
                onChange={event => setAnswer(event.target.value)}
              /> */}
              <br/>
              <br/>
              
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Correct Answer</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={answer}
                label="Correct Answer"
                onChange={(event) => setAnswer(event.target.value)}
              >
                <MenuItem value="1">Option 1</MenuItem>
                <MenuItem value="2">Option 2</MenuItem>
                <MenuItem value="3">Option 3</MenuItem>
                <MenuItem value="4">Option 4</MenuItem>
              </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} variant="contained">Cancel</Button>
            <Button onClick={handleClose}  variant="contained" type="submit">
              Submit
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
