"use strict";
const axios = require("axios");
const { model } = require("mongoose");
const Fruit = require("../models/Fruit.model");

const getFruits = (req, res) => {
  axios
    .get("https://fruit-api-301.herokuapp.com/getFruit")
    .then((foundFruits) => {
      res.json(foundFruits.data);
    });
};

const getUserFruits = (req, res) => {
  const email = req.params.email;

  Fruit.find({ email: eamil }, (err, foundFruits) => {
    res.json(foundFruits);
  });
};

const addUserFruit = (req, res) => {
  const { name, image, price, email } = req.body;
  const newFruit = new Fruit({
    name,
    image,
    price,
    email,
  });

  newFruit.save();
  res.json(newFruit);
};

const updateUserFruit = (req, res) => {
  const id = req.params.id;
  const { name, image, price, email } = req.body;

  Fruit.findByIdAndUpdate(
    { _id: id },
    { name, image, price, email },
    { new: true },
    (err, updatedFruit) => {
      res.json(updatedFruit);
    }
  );
};

const deleteUserFruit = (req, res) => {
  const id = req.params.id;
  Fruit.deleteOne({ _id: id }, (err, deletedFruit) => {
    console.log("Successfully Deleted!");
    res.json(deletedFruit);
  });
};

module.exports = {
  getFruits,
  getUserFruits,
  addUserFruit,
  updateUserFruit,
  deleteUserFruit,
};
