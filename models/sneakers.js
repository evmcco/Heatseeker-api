const db = require("./conn.js");

class Sneakers {
  static async getAll() {
    try {
      const response = await db.any(`select * from sneakers`);
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Sneakers;
