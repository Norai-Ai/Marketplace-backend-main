/**
 * NuroAI Marketplace Backend
 * Mongoose schema for storing user data.
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  walletAddress: { type: String, required: true, unique: true },
  name: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);