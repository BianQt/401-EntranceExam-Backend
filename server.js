"use strict";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(process.env.MONGO_URL);

const {
  getFruits,
  getUserFruits,
  addUserFruit,
  updateUserFruit,
  deleteUserFruit,
} = require("./controllers/fruit.controller");

app.get("/", (req, res) => {
  res.send("<h1>Server is Up & Running</h1>");
});

app.get("/fruits", getFruits);
app.get("/userFruits/:email", getUserFruits);
app.post("/fruits", addUserFruit);
app.put("/fruits/:id", updateUserFruit);
app.delete("/fruits/:id", deleteUserFruit);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
