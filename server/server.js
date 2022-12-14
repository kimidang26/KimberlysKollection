// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();
// const db = require('./db/db-connection.js');
// import fetch from "node-fetch";

// import fetch from "node-fetch";
import bodyParser from "body-parser";
import express from 'express';
import cors from 'cors';
import db from './db/db-connection.js';
import dotenv from "dotenv";
dotenv.config()
import path from "path";
import { fileURLToPath } from 'url';


//routes
import clothingRouter from "./routes/clothing.js";
import cartRouter from "./routes/itemsordered.js";
import historyRouter from "./routes/orderhistory.js";

//set port and listen for requests
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(REACT_BUILD_DIR));
const PORT = process.env.PORT || 2026;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use("/api/clothing", clothingRouter);
// app.use("/addItems", clothingRouter);
app.use("/api/cart", cartRouter);
app.use("/api/history", historyRouter);


// creates an endpoint for the route /api
app.get('/', (req, res) => {
  //res.json({ message: 'Hello from My template ExpressJS' });
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});



// // create the get request
// app.get('/api/students', cors(), async (req, res) => {
//   // const STUDENTS = [

//   //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
//   //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
//   //     { id: 3, firstName: 'Fariba', lastName: 'Dadko' },
//   //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
//   //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
//   // ];
//   // res.json(STUDENTS);
//   try {
//     const { rows: students } = await db.query('SELECT * FROM students');
//     res.send(students);
//   } catch (e) {
//     return res.status(400).json({ e });
//   }
// });

// // create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

//A put request - Update a student 
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//   console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId
//   const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
//   console.log("In the server from the url - the student id", studentId);
//   console.log("In the server, from the react - the student to be edited", updatedStudent);
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
//   const values = [updatedStudent.lastname, updatedStudent.firstname];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);

//   }catch(e){
//     console.log(e);
//     return res.status(400).json({e})
//   }
// })

// delete request
// app.delete('/api/students/:studentId', cors(), async (req, res) =>{
//   const studentId = req.params.studentId;
//   //console.log("From the delete request-url", req.params);
//   await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//   res.status(200).end();

// });


// create the POST request for a new user
app.post('/api/me', cors(), async (req, res) => {
  console.log(req.body);
  const newUser ={
    name : req.body.name,
    email: req.body.email,
    sub: req.body.sub,
  }
  console.log(newUser, "Kim the name, email, sub is fetched");

  const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
  const valuesEmail = [newUser.email]
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if (resultsEmail.length > 0 ){
    console.log(`Thank you old user for coming back`)
  } else {

  const query = 'INSERT INTO users (name, email, sub) VALUES ($1, $2, $3) RETURNING *'
  const values = [newUser.name, newUser.email, newUser.sub]
  const result = await db.query(query, values);
  console.log(result, "line 123 works");

  }

});

app.post('/completeOrder', async (req, res) => {
  const editOrder = {
    sub: req.body.sub,
  }
  console.log([editOrder.sub ]);
  //get user id from auth0 sub
  const sqlId = 'SELECT id FROM users WHERE sub=$1';
  const orderIdInfo = await db.query(sqlId, [editOrder.sub ]);
  console.log(orderIdInfo, "Post request is 11/10 for update complete orders");
  //STORE SUB INFO INTO USERCART_ID
  const userCart_Id = orderIdInfo[0].id;

  //QUERY TO UPDATE ORDER_COMPLETED
  console.log(userCart_Id );
  const changeOrderQuery = 'UPDATE created_order SET order_completed = true WHERE order_completed = false AND user_id = $1';

  try {
  const changeOrder = await db.query(
    changeOrderQuery, [userCart_Id]
  );
  // rowCount is the number of rows affected by query
  //if any rows affect then it will return true
  res.send({success:changeOrder.rowCount>=1});
  } catch (e) {
    console.log(e.message);
    //400 means query isnt working
    return res.status(400).json({ e });
  }
});



// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
