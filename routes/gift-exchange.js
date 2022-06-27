const express = require("express");
const router = express.Router();

const gifting = {
  names: [],
};

router.post("/pairs/", async (req, res, next) => {
  console.log(req.params);

  res.status(200).json(req.params)
  res.send(req.query);
});

router.post("/traditional/", async (req, res, next) => {
  console.log(req.params);

  res.status(200).json(req.params)
  res.send(req.query);
});

module.exports = router;
