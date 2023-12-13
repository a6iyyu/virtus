import express from "express";
import { createPool } from "mysql";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

const Pool = createPool({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD_MYSQL,
  database: "virtus",
  localhost: 3306,
});

Pool.query(`SELECT * FROM USERS`, (err) => {
  if (err) {
    return console.log("Error: Connection to the user database failed!");
  }
  return console.log("Connection to the user database was successful!");
});

export default app;