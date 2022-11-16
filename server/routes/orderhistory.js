import express from "express";
import cors from 'cors';
import db from "../db/db-connection.js";
const router = express.Router();


//GET REQUEST FOR ORDER HISTORY
router.get("/", cors(),  async (req, res) => {
    const userHistory = {
      sub: req.query.sub,
    }
    console.log([userHistory.sub])
      try {
        const historyIdSql= 'SELECT id FROM users WHERE sub= $1';
        const his_customerInfo = await db.query(historyIdSql, [userHistory.sub])
        //stores info of sub from front end to  customerId 
        const customerhistoryId = his_customerInfo[0].id;
        console.log(customerhistoryId, "order his #1")
  
        const historyOrder = await db.query('SELECT inventory.title, inventory.price, inventory.img, created_order.created_on, inventory.product_id, items_ordered.order_id, created_order.user_id , created_order.order_completed, items_ordered.items_id FROM inventory JOIN items_ordered ON inventory.product_id=items_ordered.product_id JOIN created_order ON items_ordered.order_id=created_order.order_id WHERE created_order.user_id=$1 AND created_order.order_completed = TRUE ORDER BY created_on ASC, order_id', [customerhistoryId]);
        res.send(historyOrder);
      } catch (e) {
        console.log(e.message, "kimberly here is the order history");
        return res.status(400).json({ e });
  
      }
    });

    export default router;