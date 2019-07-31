var express = require("express");
var router = express.Router();
const rafflesModel = require("../models/raffles");
const expoNotifs = require("../controllers/expoNotifs");

router.get("/all", async (req, res, next) => {
  const allRaffles = await rafflesModel.getAllRaffles();
  res.json(allRaffles).status(200);
});

router.post("/add", async (req, res, next) => {
  const sneaker_id = req.body.sneaker_id,
    store_id = req.body.store_id,
    start_time = req.body.start_time,
    end_time = req.body.end_time,
    post_url = req.body.post_url,
    description = req.body.description;
  const response = await rafflesModel.postRaffle(
    sneaker_id,
    store_id,
    start_time,
    end_time,
    post_url,
    description
  );
  const newRaffleData = await rafflesModel.getRaffleById(response.raffle_id);
  expoNotifs.send_notif_when_raffle_added(newRaffleData);
  res.json(newRaffleData).status(200);
});

module.exports = router;
