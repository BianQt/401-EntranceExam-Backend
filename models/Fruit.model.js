'use strict';

const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
    name : {type:String},
    image : {type:String},
    price : {type:String},
    email : {type:String}
});


const Fruit = mongoose.model("fruit", fruitSchema);

module.exports = Fruit;