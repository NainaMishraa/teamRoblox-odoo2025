const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  skillWanted: String,
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected"],
    default: "pending"
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Request", RequestSchema);