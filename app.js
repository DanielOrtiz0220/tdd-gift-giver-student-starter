const express = require("express");
const logger = require("morgan");
const giftExchange = require("./routes/gift-exchange.js");

const app = express();

app.use(logger("tiny"));
app.use(express.json());
app.use("/gift-exchange", giftExchange)

// respond with "hello world" when a GET request is made to the homepage
app.get("/", async (req, res) => {
  res.status(200).json({ ping: "pong" });
});

module.exports = app;
