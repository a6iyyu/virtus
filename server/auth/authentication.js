import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";
import path from "path";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import ejs from "ejs";
import { PrismaClient } from "@prisma/client";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const prisma = new PrismaClient();
app.set("view engine", "html");
app.set("views", [
  path.join("..", "client", "views"),
  path.join("..", "client", "components"),
]);
app.engine("html", ejs.renderFile);
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }),
  passport.initialize(),
  passport.session()
);

app.get("/login", (request, response) => {
  response.render("login", { header: "header", footer: "footer" });
});

app.get("/register", (request, response) => {
  response.render("register", { header: "header", footer: "footer" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  })
);

app.get("/profile", (request, response) => {
  response.render("profile", { header: "header", footer: "footer" });
  if (request.cookies) {
    const token = request.cookies.token;
    jwt.verify(token, process.env.JWT_SECRET, async (error) => {
      if (error) {
        response.redirect("/login");
        return error;
      }
    });
  }
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    console.log("Error: User not found!");
    response.redirect("/login");
    return;
  }
  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    console.log("Error: Wrong password!");
    response.redirect("/login");
    return;
  }
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 3600,
      algorithm: "HS256",
    }
  );
  response.cookie(token, {
    expires: new Date(Date.now() + 3600000),
    secure: false,
    httpOnly: true,
    sameSite: true,
  });
  response.redirect("/profile");
});

app.post("/register", async (request, response) => {
  const { username, email, password } = request.body;
  if (!password) {
    console.log("Error: Password is required!");
    response.status(400).json({
      error: "Password is required!",
    });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    console.log("User successfully registered!\n", newUser);
    response.status(200).json({
      message: "User successfully registered!",
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      error: "Internal Server Error",
    });
  }
  response.redirect("/profile");
});

app.patch("/register/:id", async (request, response) => {
  const { id } = request.body;
  await prisma.users.update({
    where: {
      id: id,
    },
    data: {
      username: request.body.username,
    },
    select: {
      username: true,
    },
  });
});

app.delete("/register/:id", async (request, response) => {
  const { id } = request.body;
  await prisma.users.delete({
    where: {
      id: id,
    },
  });
});

app.get("/logout", async (request, response) => {
  response.clearCookie(token);
  request.session.destroy();
  response.redirect("/login");
});

export default app;