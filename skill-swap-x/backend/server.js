const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

connectDB();

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to SkillSwapX API!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));