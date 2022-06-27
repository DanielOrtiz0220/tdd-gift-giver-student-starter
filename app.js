const express = require("express");
const logger = require("morgan");
const app = express();
const giftExchange = require("routes/gift-exchange.js");

app.use(logger("tiny"));
app.use(express.json);
app.use("/giftExchange", giftExchange)

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.status(200).json({ ping: "pong" });
});

module.exports = app;
