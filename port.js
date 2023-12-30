import express from "express";
import logger from "morgan";
import path from "path";
import cors from "cors";
import ejs from "ejs";
import googlestrategy from "./server/auth/googlestrategy.js";
import auth from "./server/auth/authentication.js";
import db from "./server/db/db.js";
const app = express();

app.set("view engine", "html");
app.engine("html", ejs.renderFile);
app.use(logger("dev"));
app.use(cors());
app.use(express.static(path.join("components")));
app.use(express.static(path.join("static")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(auth);
app.use(db);
app.use(googlestrategy);

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

app.listen(8000, () => {
  console.log("Server is running in http://localhost:8000");
});