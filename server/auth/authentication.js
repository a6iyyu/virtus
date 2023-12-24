const express = require("express");
const session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const path = require("path");
const { PrismaClient } = require("@prisma/client");
const passport = require("passport");
require("dotenv").config();

const app = express();
const prisma = new PrismaClient();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));
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
  response.render("login");
});

app.get("/register", (request, response) => {
  response.render("register");
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
  response.render("profile");
  if (request.cookies) {
    const token = request.cookies.token;
    jwt.verify(token, process.env.JWT_SECRET, async (error) => {
      if (error) {
        response.redirect("/login");
        return;
      }
    });
  }
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    console.log("Error: User not found!");
    response.redirect("/login");
    return;
  }
  if (!user || !bcrypt.compareSync(password, user.password)) {
    response.status(401).json({ message: "Invalid credentials!" });
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
  request.session.token = token;
  response.cookie(token, {
    expires: new Date(Date.now() + 3600000),
    secure: false,
    httpOnly: true,
    sameSite: true,
  });
  response.redirect("/profile");
  return;
});

app.post("/register", async (request, response) => {
  const { name, email, password } = request.body;
  const errors = validate(request.body);
  if (errors.length) {
    return response.status(400).json({ errors });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log("User successfully registered!", user);
    response.status(200).json({
      message: "User successfully registered!",
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.get("/logout", async (request, response) => {
  request.session.destroy();
  response.redirect("/login");
});

app.patch("/profile/:id", async (request, response) => {
  console.log(request.body);
  const { id } = request.body;
  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: request.body.name,
    },
    select: {
      name: true,
    },
  });
  response.redirect("/profile");
});

app.delete("/profile/:id", async (request, response) => {
  console.log(request.body);
  const { id } = request.body;
  await prisma.user.delete({
    where: {
      id: id,
    },
  });
  response.redirect("/profile");
});

function validate(data) {
  const errors = [];
  if (!data.name) {
    errors.push({ message: "Name is required!" });
  }
  if (!data.email) {
    errors.push({ message: "Email is required!" });
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.push({ message: "Email is invalid!" });
  }
  if (!data.password) {
    errors.push({ message: "Password is required!" });
  } else if (data.password.length < 8) {
    errors.push({ message: "Password must be at least 8 characters long!" });
  }
  return errors;
}

module.exports = app;