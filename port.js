import express from "express";
import logger from "morgan";
import path from "path";
import db from "./db/users.js";
import "./auth/google-oauth20.js";

const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.static(path.join("static")));
app.use(db);

app.get("/", async (request, response) => {
  response.render("homepage");
});

app.get("/about", async (request, response) => {
  response.render("about");
});

app.get("/analytics", async (request, response) => {
  response.render("analytics");
});

app.get("/blog", async (request, response) => {
  response.render("blog");
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

app.get("/faq", async (request, response) => {
  response.render("faq");
});

app.get("/help-center", async (request, response) => {
  response.render("help-center");
});

app.get("/limited-editions", async (request, response) => {
  response.render("limited-editions");
});

app.get("/profile", async (request, response) => {
  response.render("profile");
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