let mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/my-demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class DbConnection {
  static getConnection() {
    return new Promise((resolve, reject) => {
      var db = mongoose.connection;
      return resolve(db);
    });
  }
}

module.exports = DbConnection;
