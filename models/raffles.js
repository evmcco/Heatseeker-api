const db = require("./conn.js");

class Raffles {
  static async getAllRaffles() {
    try {
      const response = await db.any(
        `select r.*, st.store_name, st.address from raffles as r join stores as st on r.store_id = st.store_id`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Raffles;
