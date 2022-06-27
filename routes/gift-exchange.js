const express = require("express");
const router = express.Router();

router
  .post("/pairs/:names", async (req, res, next) => {
    console.log(req.params);
  })
  .post("/traditional/:names", async (req, res, next) => {
    console.log(req.params);
  });

module.exports = router;
