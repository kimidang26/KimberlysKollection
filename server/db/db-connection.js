// const { Pool } = require('pg');
// const db = new Pool({
//     connectionString: process.env.DB_URI
//   });

//   module.exports = db;




// server/db/db-connection.js;
import pgPromise from 'pg-promise';

// Create Database Connection
const pgp = pgPromise({});

const db = pgp('postgres://localhost:5432/clothingstore');

export default db;