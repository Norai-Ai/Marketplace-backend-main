/**
 * NuroAI Marketplace Backend
 * Routes for managing transactions on the NuroAI Marketplace.
 */

const express = require("express");
const { initiateTransaction } = require("../utils/solana");
const Transaction = require("../models/Transaction");
const router = express.Router();

// Create a transaction for purchase or rent
router.post("/", async (req, res) => {
  try {
    const { listingId, buyer, transactionType } = req.body;

    const txHash = await initiateTransaction(listingId, buyer, transactionType);
    const transaction = new Transaction({ listingId, buyer, transactionType, txHash });

    await transaction.save();
    res.status(201).json({ success: true, transaction });
  } catch (error) {
    console.error("Error initiating transaction:", error);
    res.status(500).json({ success: false, message: "Failed to initiate transaction" });
  }
});

module.exports = router;