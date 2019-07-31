const db = require("./conn.js");

class Raffles {
  static async getAllRaffles() {
    try {
      const response = await db.any(
        `select r.*, st.store_name, st.address, st.address_lat, st.address_lon from raffles as r join stores as st on r.store_id = st.store_id order by r.raffle_id desc`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async getRaffleById(id) {
    try {
      const response = await db.one(
        `select * from raffles where raffle_id = ${id}`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }

  static async postRaffle(
    sneaker_id,
    store_id,
    start_time,
    end_time,
    post_url,
    description
  ) {
    try {
      const response = await db.one(
        `insert into raffles (sneaker_id, store_id, start_time, end_time, post_url, description) values 
        ($1, $2, $3, $4, $5, $6) returning raffle_id`,
        [sneaker_id, store_id, start_time, end_time, post_url, description]
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Raffles;
