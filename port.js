const express = require("express");
const logger = require("morgan");
const path = require("path");
const db = require("./db/users.js");
require("./auth/google-oauth20.js");

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "static")));
app.use(db);

app.get("/", async (request, response) => {
  response.render("homepage");
});

app.get("/about", async (request, response) => {
  response.render("about");
});

app.get("/careers", async (request, response) => {
  response.render("careers");
});

app.use("/", async (request, response) => {
  response.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});