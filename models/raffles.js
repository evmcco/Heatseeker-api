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
}

module.exports = Raffles;
