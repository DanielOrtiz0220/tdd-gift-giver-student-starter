const express = require("express");
const router = express.Router();
const model = require("../models/gift-exchange");

const gifting = {
  names: [],
};

router.post("/pairs/", async (req, res, next) => {
  try {
    console.log(req.params);
    // res.status(200).json(req.params);
    res.send(model.traditional(req.body));
  } catch (err) {
    next(err);
  }
});

router.post("/traditional/", async (req, res, next) => {
  try {
    console.log(req.params);
    // res.status(200).json(req.params);
    res.send(model.traditional(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
