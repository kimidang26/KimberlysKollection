// const { Pool } = require('pg');
// const db = new Pool({
//     connectionString: process.env.DB_URI
//   });

//   module.exports = db;



// server/db/db-connection.js;
import pgPromise from 'pg-promise';
import dotenv from "dotenv";
dotenv.config();

// Create Database Connection
const pgp = pgPromise({});

const db = pgp(process.env.DATABASE_URL);
console.log(process.env.DATABASE_URL, "this is the url supriya and kim");

export default db;

