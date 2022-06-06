const mongoose = require("mongoose");

const UserMarkSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    mark: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const UserMark = mongoose.model("UserMark", UserMarkSchema);

module.exports = UserMark;
