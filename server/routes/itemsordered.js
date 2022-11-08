import express from "express";
import cors from 'cors';
import db from "../db/db-connection.js";
// import { restart } from "nodemon";
// import db from "../db/db-connection.js";
const router = express.Router();

//GET REQUEST FOR ITEMS IN CART
router.get("/", cors(),  async (req, res) => {
  const userCart = {
    id: req.body.id,
  }
    try {
      const cart = await db.query('SELECT title, price, img, inventory.product_id, items_ordered.order_id, created_order.user_id , created_order.order_completed FROM inventory JOIN items_ordered ON inventory.product_id=items_ordered.product_id JOIN created_order ON items_ordered.order_id=created_order.order_id WHERE id=$1 AND created_order.order_completed IS true LIMIT 1; ', [userCart]);
      res.send(cart);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });



  export default router;