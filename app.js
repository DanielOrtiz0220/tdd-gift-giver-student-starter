const express = require("express");
const logger = require("morgan");
const giftExchange = require("./routes/gift-exchange.js");
const { NotFoundError } = require("./utils/errors");

const app = express();

app.use(logger("tiny"));
app.use(express.json());
app.use("/gift-exchange", giftExchange);

//testing GET
app.get("/", async (req, res) => {
  res.status(200).json({ ping: "pong" });
});

//handles 404s
app.use((req, res, next) => {
  return next(new NotFoundError());
});

    //handles any generic error 
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message;

  return res.status(status).json({
    error: { message, status },
  });
});



module.exports = app;
