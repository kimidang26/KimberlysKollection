import express from "express";
import cors from 'cors';
import db from "../db/db-connection.js";
// import { restart } from "nodemon";
// import db from "../db/db-connection.js";
const router = express.Router();

//GET REQUEST FOR ITEMS IN CART
router.get("/", cors(),  async (req, res) => {
  const userCart = {
    sub: req.query.sub,
  }
  console.log([userCart.sub])
    try {
      const customerIdSql= 'SELECT id FROM users WHERE sub= $1';
      const customerInfo = await db.query(customerIdSql, [userCart.sub])
      //stores info of sub from front end to  customerId 
      const customerId = customerInfo[0].id;
      console.log(customerId, "cutomer id kim")

      const shoppingCart = await db.query('SELECT title, price, img, inventory.product_id, items_ordered.order_id, created_order.user_id , created_order.order_completed FROM inventory JOIN items_ordered ON inventory.product_id=items_ordered.product_id JOIN created_order ON items_ordered.order_id=created_order.order_id WHERE created_order.user_id=$1 AND created_order.order_completed = FALSE ', [customerId]);
      res.send(shoppingCart);
    } catch (e) {
      console.log(e.message, "kimberly here is the e");
      return res.status(400).json({ e });

    }
  });


  //   ******DELETE STUFF***************
  router.delete('/:id', async (req, res) => {
    // : acts as a placeholder
    //to check if its correct user 
    //SELECT created_order.user_id FROM created_order JOIN items_ordered ON items_ordered.order_id = created_order.order_id WHERE items_ordered.items_id = 5;
    const itemOrderId = req.params.id;
    try {
      await db.none('DELETE FROM items_ordered WHERE items_id=$1', [itemOrderId]);
      res.send({ status: 'success' });
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
  



  export default router;