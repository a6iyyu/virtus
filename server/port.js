import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import path from "path";
import cors from "cors";
import ejs from "ejs";
import googlestrategy from "../server/auth/googlestrategy.js";
import auth from "../server/auth/authentication.js";
import db from "../server/db/db.js";
const app = express();

app.set("view engine", "html");
app.set("views", [path.join(".", "client", "views"), path.join(".", "client", "components")]);
app.engine("html", ejs.renderFile);
app.use(logger("dev"));
app.use(cors());
app.use(express.static(path.join(".", "client")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(auth, db, googlestrategy);

app.get("/", async (request, response) => {
  response.render("homepage", { header: "header", footer: "footer" });
});

app.get("/about-us", async (request, response) => {
  response.render("about-us", { header: "header", footer: "footer" });
});

app.get("/analytics", async (request, response) => {
  response.render("analytics", { header: "header", footer: "footer" });
});

app.get("/blog", (request, response) => {
  response.render("blog", { header: "header", footer: "footer" });
});

app.get("/careers", async (request, response) => {
  response.render("careers", { header: "header", footer: "footer" });
});

app.get("/community", async (request, response) => {
  response.render("community", { header: "header", footer: "footer" });
});

app.get("/explore", async (request, response) => {
  response.render("explore", { header: "header", footer: "footer" });
});

app.get("/help-center", async (request, response) => {
  response.render("help-center", { header: "header", footer: "footer" });
});

app.get("/limited-editions", async (request, response) => {
  response.render("limited-editions", { header: "header", footer: "footer" });
});

app.get("/not-logged-in", async (request, response) => {
  response.render("not-logged-in", { header: "header", footer: "footer" });
});

app.get("/saved", async (request, response) => {
  response.render("saved", { header: "header", footer: "footer" });
});

app.get("/services", async (request, response) => {
  response.render("services", { header: "header", footer: "footer" });
});

app.get("/terms-and-privacy", async (request, response) => {
  response.render("terms-and-privacy", { header: "header", footer: "footer" });
});

app.use("/", async (request, response) => {
  response.status(404).render("404");
});

app.listen(8000, () => {
  console.log("Server is running in http://localhost:8000");
});