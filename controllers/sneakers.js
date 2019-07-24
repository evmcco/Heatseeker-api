const Raffles = require("../models/raffles"),
  Sneakers = require("../models/sneakers");

const { format } = require("date-fns");

exports.raffles_by_sneaker_get = async (req, res) => {
  const sneakersList = await Sneakers.getAll();
  const rafflesList = await Raffles.getAllRaffles();
  for (sneaker in sneakersList) {
    sneakersList[sneaker].raffles = [];
    for (raffle in rafflesList) {
      if (sneakersList[sneaker].sneaker_id === rafflesList[raffle].sneaker_id) {
        let cleanStartTime = cleanDate(rafflesList[raffle].start_time);
        let cleanEndTime = cleanDate(rafflesList[raffle].end_time);
        rafflesList[raffle].start_time_clean = cleanStartTime;
        rafflesList[raffle].end_time_clean = cleanEndTime;
        sneakersList[sneaker].raffles.push(rafflesList[raffle]);
      }
    }
  }
  // console.log("raffles_by_sneaker_get", sneakersList);
  return sneakersList;
};

function cleanDate(date) {
  let result = format(date, "M/D [at] h:mm a");
  // console.log(date, result);
  return result;
}
