import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function QuestionBank() {
  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/Getquestions")
      .then((response) => setQuestionData(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
     {questionData.map((data,index) => (
    <Card sx={{ minheight: 250 }} key={index}>
     
        <CardActionArea>
          {data.QuestionImg ? (
            <CardMedia
              component="img"
              height="140"
              image={data?.QuestionImg}
              alt="green iguana"
            />
          ) : null}
          <CardContent>
            <Typography variant="h5" color="text.secondary">
              {data.question}...?
            </Typography>
            <br />

            <FormGroup>
              <FormControlLabel
                control={
                  data.answer === 1 ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )
                }
                label={data.option1}
              />
              <FormControlLabel
                control={
                  data.answer === 2 ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )
                }
                label={data.option2}
              />
              <FormControlLabel
                control={
                  data.answer === 3 ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )
                }
                label={data.option3}
              />
              <FormControlLabel
                control={
                  data.answer === 4 ? (
                    <Checkbox {...label} defaultChecked />
                  ) : (
                    <Checkbox {...label} />
                  )
                }
                label={data.option4}
              />
            </FormGroup>
          </CardContent>
        </CardActionArea>
      
    </Card>
     ))} 
    </>
  );
}
