import express from "express";
import cors from 'cors';
import db from "../db/db-connection.js";
// import { restart } from "nodemon";
// import db from "../db/db-connection.js";
const router = express.Router();


// GET REQUEST FOR CLOTHING
router.get("/", async (req, res) => {
  let men, women;
  try {
    const mCloth = await fetch(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
    men = await mCloth.json();
  } catch (e) {
    console.log("Error when fetching mens clothing", e);
    return res.status(400).json({ e });
  }

  try {
    const wClothing = await fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    women = await wClothing.json();
  } catch (e) {
    res.status(400).json({ e });
  }
  console.log(men);
  console.log(women);

  let output = [...men, ...women];
  return res.json(output);
});

//get product id and get sub id seperately 
//

router.post("/additems", cors(), async (req, res) => {
  //asks for USER ID and sub data on the frontend
  const newAddItem = { 
    id: req.body.id,
    sub: req.body.sub,
  };
  console.log([newAddItem.id]);

  //This is where were getting the user id from the auth0 sub
  //from created orders select data from users and completed orders
  //sub=$1 is the sub from auth0
  const userIdSql = 'SELECT id FROM users WHERE sub=$1';
  const subInfo =  await db.query(userIdSql, [newAddItem.sub]);
  console.log(subInfo, "Kimberly line 52 is reached");
  //store info into userId variable
  const userId = subInfo[0].id;
  
  //CHECK IN DB TO SEE IF I HAVE ACTIVE CART ORDER (MEANING CART STATUS) ASSIGNED TO THIS USER
  const existingOrderSql = 'SELECT order_id FROM created_order WHERE user_id=$1 AND order_completed IS FALSE LIMIT 1';

  //Passing/checking to see if it exists userId into the query and if it exists it will return it
  const orderedItems = await db.query(existingOrderSql, [userId]);
  //asks does this value exist? give it to me or else be null
  let orderId = orderedItems?.[0]?.order_id;
  //if cart not in progress then create cart for user
  if( orderId == null){
    const createCartSql = 'INSERT INTO created_order (order_completed, created_on, user_id) VALUES ($1, $2, $3) RETURNING * '
    const valueCartSql = [false, new Date(), userId]
    //when insert into table, executecartsql is an array of row (response from db)
    const executeCartSql = await db.query(createCartSql, valueCartSql);
    //extract order id and update js variable orderID
    orderId = executeCartSql[0].order_id;
    console.log(executeCartSql, "new order added")
  } 
    const queryItem = 'INSERT INTO items_ordered (product_id, order_id) VALUES ($1, $2) RETURNING *'
    const valuesItem = [newAddItem.id, orderId]
    const executeCart = await db.query(queryItem, valuesItem);
    console.log(executeCart, "cart is added")
   
});

// router.delete("/additems", cors(), async (req, res) => {
//   const deleteId = req.body.id;
//   console.log(req.body);
//   await db.query("DELETE FROM items_ordered WHERE id=$1", [deleteId]);
//   res.status(200).end();
// });



export default router;