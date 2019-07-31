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

  static async getSneakerById(sneaker_id) {
    try {
      const response = await db.one(
        `select * from sneakers where sneaker_id = ${sneaker_id}`
      );
      return response;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = Sneakers;
