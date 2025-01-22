/**
 * Nora AI Marketplace Backend
 * Mongoose schema for storing transaction data.
 */

const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: "Listing", required: true },
  buyer: { type: String, required: true },
  transactionType: { type: String, enum: ["purchase", "rent"], required: true },
  txHash: { type: String, required: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);