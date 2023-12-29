/* eslint-disable no-undef */
import express from "express";
import passport from "passport";
import { Strategy as googlestrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config();
const app = express();

passport.use(
  new googlestrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

export default app;