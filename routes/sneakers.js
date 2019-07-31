var express = require("express");
var router = express.Router();
const sneakersController = require("../controllers/sneakers");

router.get("/all", async (req, res, next) => {
  const allSneakersWithRaffles = await sneakersController.raffles_by_sneaker_get();
  // console.log("/allRaffles", allSneakersWithRaffles);
  res.json(allSneakersWithRaffles).status(200);
});

module.exports = router;
