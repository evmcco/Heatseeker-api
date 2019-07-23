var express = require("express");
var router = express.Router();
const rafflesModel = require("../models/raffles");

router.get("/all", async (req, res, next) => {
  const allRaffles = await rafflesModel.getAllRaffles();
  res.json(allRaffles).status(200);
});

module.exports = router;
