const DbConnection = require("../db");
const Users = require("../models/user");

class UserService {
  static findAll() {
    return new Promise((resolve, reject) => {
      DbConnection.getConnection()
        .then(() => {
          Users.find((err, doc) => {
            if (err) {
              reject({ error: true, data: err });
            } else {
              resolve({ error: false, data: doc });
            }
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  static findById(id) {
    return new Promise((resolve, reject) => {
      DbConnection.getConnection()
        .then(() => {
          Users.findById(id, {}, (err, doc) => {
            if (err) {
              reject({ error: true, data: err });
            } else {
              resolve({ error: false, data: doc });
            }
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  static create(payload) {
    return new Promise((resolve, reject) => {
      DbConnection.getConnection()
        .then(() => {
          Users.create(payload, (err, doc) => {
            if (err) {
              resolve({ error: true, data: err });
            } else {
              resolve({ error: false, data: doc });
            }
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  static update(id, payload) {
    return new Promise((resolve, reject) => {
      DbConnection.getConnection()
        .then(() => {
          Users.findByIdAndUpdate(id, payload, (err, doc) => {
            if (err) {
              resolve({ error: true, data: err });
            } else {
              resolve({ error: false, data: doc });
            }
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  static delete(id) {
    return new Promise((resolve, reject) => {
      DbConnection.getConnection()
        .then(() => {
          Users.findByIdAndRemove(id, (err, doc) => {
            if (err) {
              resolve({ error: true, data: err });
            } else {
              resolve({ error: false, data: doc });
            }
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = UserService;
