/**
 * NuroAI Marketplace Backend
 * Mongoose schema for AI model and dataset listings.
 */

const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String },
  owner: { type: String, required: true },
});

module.exports = mongoose.model("Listing", listingSchema);