const express = require("express");
const logger = require("morgan");
const path = require("path");
const auth = require("./auth/auth.js");
const db = require("./db/users.js");
require("./auth/googlestrategy.js");

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "static")));
app.use(auth);
app.use(db);

app.get("/", async (request, response) => {
  response.render("homepage");
});

app.get("/about-us", async (request, response) => {
  response.render("about");
});

app.get("/analytics", async (request, response) => {
  response.render("analytics");
});

app.get("/blog", (request, response) => {
  response.sendFile(path.join(__dirname, "views", "blog.html"));
});

app.get("/careers", async (request, response) => {
  response.render("careers");
});

app.get("/community", async (request, response) => {
  response.render("community");
});

app.get("/explore", async (request, response) => {
  response.render("explore");
});

app.get("/help-center", async (request, response) => {
  response.render("help-center");
});

app.get("/limited-editions", async (request, response) => {
  response.render("limited-editions");
});

app.get("/saved", async (request, response) => {
  response.render("saved");
});

app.get("/services", async (request, response) => {
  response.render("services");
});

app.get("/terms-and-privacy", async (request, response) => {
  response.render("terms-and-privacy");
});

app.use("/", async (request, response) => {
  response.status(404).render("404");
});

app.listen(port, () => {
  console.log(`Server is running in http://localhost:${port}`);
});