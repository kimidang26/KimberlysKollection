import express from "express";
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



export default router;