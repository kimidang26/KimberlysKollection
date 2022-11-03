// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const db = require('./db/db-connection.js');
// import fetch from "node-fetch";

// import fetch from "node-fetch";
import bodyParser from "body-parser";
import express from 'express';
import cors from 'cors';
// import db from './db/db-connection.js';
import dotenv from "dotenv";
dotenv.config()


//routes
import clothingRouter from "./routes/clothing.js";

const app = express();
const PORT = 2626;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use("/clothing", clothingRouter);


// creates an endpoint for the route /api
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});


// // GET REQUEST FOR CLOTHING
// app.get('/clothing', (req, res) => {
//   let URL = `https://fakestoreapi.com/products`;
//   console.log("Kimberly's Product Recieved")
//     fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       res.send(data);
//     });
//   });



// // GET REQUEST FOR WOMENS CLOTHING
// app.get('/womensclothing', (req, res) => {
//   let URL = `https://fakestoreapi.com/products/category/women's clothing`;
//   console.log("Womens Clothing was recieved")
//     fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//       res.send(data);
//     });
//   });


// // GET REQUEST FOR MENS CLOTHING
// app.get('/mensclothing', (req, res) => {
//   let LINK = `https://fakestoreapi.com/products/category/men's clothing`;
//   console.log("Mens Clothing was recieved")
//     fetch(LINK)
//     .then((response) => response.json())
//     .then((data) => {
//       res.send(data);
//     });
//   });


// create the get request
app.get('/api/students', cors(), async (req, res) => {
  // const STUDENTS = [

  //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
  //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
  //     { id: 3, firstName: 'Fariba', lastName: 'Dadko' },
  //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
  //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
  // ];
  // res.json(STUDENTS);
  try {
    const { rows: students } = await db.query('SELECT * FROM students');
    res.send(students);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

// create the POST request
app.post('/api/students', cors(), async (req, res) => {
  const newUser = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  console.log([newUser.firstname, newUser.lastname]);
  const result = await db.query(
    'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
    [newUser.firstname, newUser.lastname],
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});

//A put request - Update a student 
app.put('/api/students/:studentId', cors(), async (req, res) =>{
  console.log(req.params);
  //This will be the id that I want to find in the DB - the student to be updated
  const studentId = req.params.studentId
  const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
  console.log("In the server from the url - the student id", studentId);
  console.log("In the server, from the react - the student to be edited", updatedStudent);
  // UPDATE students SET lastname = "something" WHERE id="16";
  const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
  const values = [updatedStudent.lastname, updatedStudent.firstname];
  try {
    const updated = await db.query(query, values);
    console.log(updated.rows[0]);
    res.send(updated.rows[0]);

  }catch(e){
    console.log(e);
    return res.status(400).json({e})
  }
})

// delete request
app.delete('/api/students/:studentId', cors(), async (req, res) =>{
  const studentId = req.params.studentId;
  //console.log("From the delete request-url", req.params);
  await db.query('DELETE FROM students WHERE id=$1', [studentId]);
  res.status(200).end();

});


// create the POST request for a new user
app.post('/api/me', cors(), async (req, res) => {
  console.log(req.body);
});


// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
