/**
 * Nora AI Marketplace Backend
 * Routes for creating and fetching AI model and dataset listings.
 */

const express = require("express");
const Listing = require("../models/Listing");
const router = express.Router();

// Get all listings
router.get("/", async (req, res) => {
  try {
    const listings = await Listing.find();
    res.status(200).json({ success: true, listings });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ success: false, message: "Failed to fetch listings" });
  }
});

// Create a new listing
router.post("/", async (req, res) => {
  try {
    const { title, description, price, duration, owner } = req.body;
    const listing = new Listing({ title, description, price, duration, owner });
    await listing.save();
    res.status(201).json({ success: true, listing });
  } catch (error) {
    console.error("Error creating listing:", error);
    res.status(500).json({ success: false, message: "Failed to create listing" });
  }
});

module.exports = router;