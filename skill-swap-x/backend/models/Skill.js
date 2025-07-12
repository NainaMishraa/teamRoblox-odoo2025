const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Skill", SkillSchema);