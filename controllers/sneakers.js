const Raffles = require("../models/raffles"),
  Sneakers = require("../models/sneakers");

exports.raffles_by_sneaker_get = async (req, res) => {
  const sneakersList = await Sneakers.getAll();
  const rafflesList = await Raffles.getAllRaffles();
  for (sneaker in sneakersList) {
    sneakersList[sneaker].raffles = [];
    for (raffle in rafflesList) {
      if (sneakersList[sneaker].sneaker_id === rafflesList[raffle].sneaker_id) {
        sneakersList[sneaker].raffles.push(rafflesList[raffle]);
      }
    }
  }
  // console.log("raffles_by_sneaker_get", sneakersList);
  return sneakersList;
};
