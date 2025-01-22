/**
 * Nora AI Marketplace Backend
 * Routes for managing user registration and authentication.
 */

const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Register or login a user
router.post("/register", async (req, res) => {
  try {
    const { walletAddress, name } = req.body;
    let user = await User.findOne({ walletAddress });

    if (!user) {
      user = new User({ walletAddress, name });
      await user.save();
    }

    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ success: false, message: "Failed to register user" });
  }
});

module.exports = router;