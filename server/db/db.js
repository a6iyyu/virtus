import express from "express";
import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const Pool = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "MizuDatabase16~",
  database: "virtus",
  port: 3306,
});

Pool.query(`SELECT * FROM USERS`, (err) => {
  if (err) {
    return console.log("Error: Connection to the user database failed!");
  }
  return console.log("Connection to the user database was successful!");
});

export default app;