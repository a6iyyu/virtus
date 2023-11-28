const express = require("express");
const { createPool } = require("mysql");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));

const Pool = createPool({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD_MYSQL,
  database: "virtus",
  localhost: 3306,
});

Pool.query(`SELECT * FROM USERS`, (err, result) => {
  if (err) {
    return console.log("Error: Connection to the user database failed!");
  }
  return console.log("Connection to the user database was successful!");
});

module.exports = app;