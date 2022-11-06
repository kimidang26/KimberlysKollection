import express from "express";
import cors from 'cors';
import db from "../db/db-connection.js";
// import { restart } from "nodemon";
// import db from "../db/db-connection.js";
const router = express.Router();

//GET REQUEST FOR ITEMS IN CART
router.get("/",  async (req, res) => {
    try {
      const cart = await db.query('SELECT * FROM  items_ordered ORDER BY order_id');
      res.send(cart);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });



  export default router;