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


router.post("/additems", cors(), async (req, res) => {
  // from data or from db? i think its from data from front end?
  const newAddItem = { id: req.body.id };
  console.log([newAddItem.id]);

  //from created orders select data from users and completed orders
  const queryUserId = 'SELECT * FROM created_order WHERE user_id=$1 order_completed=$2 LIMIT 2';
  const valuesUserId = [newAddItem.user_id]
  const completedItem = [newAddItem.order_completed]
  const resultUserId = await db.query (queryUserId, valuesUserId, completedItem);


    //if the user id exists and order is not completed then in items ordered table add product id and order id
  if ( valuesUserId.length > 0 && completedItem === false){ 
    console.log("We got the status kamily")
    const queryItem = 'INSERT INTO items_ordered (product_id, order_id) VALUES ($1, $2) RETURNING *'
    const valuesItem = [newAddItem.product_id, newAddItem.order_id]
    const cart = await db.query(queryItem, valuesItem);
    console.log(cart, "cart is added")
  } else {

  }
});

// router.delete("/additems", cors(), async (req, res) => {
//   const deleteId = req.body.id;
//   console.log(req.body);
//   await db.query("DELETE FROM items_ordered WHERE id=$1", [deleteId]);
//   res.status(200).end();
// });



export default router;