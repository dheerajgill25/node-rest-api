const DbConnection = require("../db");
const Users = require("../models/user");
const UserMarks = require("../models/user.mark");
const mongoose = require("mongoose");

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
  static addSubjectMark(payload) {
    return new Promise((resolve, reject) => {
      DbConnection.getConnection()
        .then(() => {
          UserMarks.create(payload, (err, doc) => {
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
  static updateSubjectMark(id, payload) {
    return new Promise((resolve, reject) => {
      DbConnection.getConnection()
        .then(() => {
          UserMarks.findByIdAndUpdate(id, payload, (err, doc) => {
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
  static getUserMark(userId) {
    return new Promise((resolve, reject) => {
      DbConnection.getConnection()
        .then(() => {
          resolve(
            Users.aggregate([
              {
                $match: { _id: mongoose.Types.ObjectId(userId) },
              },
              {
                $lookup: {
                  from: "usermarks",
                  localField: "_id",
                  foreignField: "userId",
                  as: "marks",
                  pipeline: [
                    { $project: { subject: 1, mark: 1, userId: 1, _id: 0 } },
                  ],
                },
              },
              {
                $addFields: {
                  totalMark: { $sum: "$marks.mark" },
                },
              },
              {
                $addFields: {
                  percentage: {
                    $multiply: [{ $divide: ["$totalMark", 300] }, 100]
                  },
                },
              },
            ])
          );
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

module.exports = UserService;
