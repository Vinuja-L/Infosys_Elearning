import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import axios from "axios";

export default function FormDialog({dataState, setDataState}) {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = useState({});
 
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleInputChange = (e, isNumber) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: isNumber ? Number(value) : value,
    });
  };


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      author,
      content
    };

    axios
      .post("http://localhost:8080/api/post/article", data)
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
        +AddArticle
      </Button>
      
      <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
        <Typography variant="h4" gutterBottom>
        Write an Article
      </Typography>
      
        <TextField
          label="Title"
          name="Title"
          fullWidth
          value={title}
         onChange={(event) => setTitle(event.target.value)}
        />
        
        <TextField
          label="Author"
          name="Author"
          fullWidth
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        
        <TextField
          label="Content"
          name="Content"
          fullWidth
          multiline
          rows={10}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        
     
        </DialogContent>
        <DialogActions>
        <Button variant="contained" color="primary" type="submit" onClick={handleClose}>
          Submit Article
        </Button>
          <Button onClick={handleClose} variant="contained" color="primary">Cancel</Button>
        
        </DialogActions>
       </form>
      </Dialog>
      
    </div>
  );
}