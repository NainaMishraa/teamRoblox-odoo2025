const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  location: String,
  photo: String,
  isPublic: { type: Boolean, default: true },
  skillsOffered: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  skillsWanted: [{ type: mongoose.Schema.Types.ObjectId, ref: "Skill" }],
  tokens: { type: Number, default: 0 },
  availability: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);