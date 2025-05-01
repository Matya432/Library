//Dependencies
const express = require("express");
const app = express();
const { Sequelize } = require("sequelize")
const path = require("path");
const cors = require ("cors");

//Configuration: MIDDLEWARE
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//CONTROLLERS
const booksController = require("./controllers/books_controller");
app.use("/api/books", booksController);
console.log("Books controller loadded");

//LISTEN
app.listen(4005, () => {
    console.log("Server running on port 4005");
})
