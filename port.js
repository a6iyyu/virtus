const express = require("express");
const logger = require("morgan");
const path = require("path");
const db = require("./db/users.js");
require("./auth/google-oauth20.js");

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "static", "css")));
app.use(express.static(path.join(__dirname, "static", "js")));
app.use(db);

app.get("/", async (request, response) => {
  response.render("homepage");
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});