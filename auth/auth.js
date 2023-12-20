const express = require("express");
const session = require("express-session");
const axios = require("axios");
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

async function ValidateReCaptcha(ReCaptchaResponse) {
  const VerifyReCaptcha = await axios.post(
    "https://www.google.com/recaptcha/api/siteverify",
    null,
    {
      params: {
        secret: process.env.RECAPTCHA_SECRET,
        response: ReCaptchaResponse,
      },
    }
  );
  return VerifyReCaptcha.data.success;
}

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
    jwt.verify(token, process.env.JWT_SECRET, async (error, decoded) => {
      if (error) {
        response.redirect("/login");
        return;
      }
      const user = await prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
      });
      response.render("profile.ejs", {
        user: user,
      });
    });
  }
});

app.post("/login", async (request, response) => {
  console.log(request.body);
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
  response.cookie("token", token, {
    expires: new Date(Date.now() + 3600000),
    secure: false,
    httpOnly: true,
    sameSite: true,
  });
  response.redirect("/profile");
  return;
});

app.post("/register", async (request, response) => {
  const {
    name,
    email,
    password,
    "g-recaptcha-response": ReCaptchaResponse,
  } = request.body;
  console.log(request.body);
  const IsValidReCaptcha = await ValidateReCaptcha(ReCaptchaResponse);
  if (!IsValidReCaptcha) {
    return response.status(400).json({
      error: "reCAPTCHA validation failed",
    });
  }
  if (!password) {
    console.log("Error: Password is required!");
    response.status(400).json({
      error: "Error: Password is required!",
    });
    return;
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const NewUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    console.log("User successfully registered!", NewUser);
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
  response.clearCookie(token);
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

module.exports = app;