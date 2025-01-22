/**
 * NuroAI Marketplace Backend
 * Backend service for managing listings, transactions, and user data in the NuroAI Marketplace.
 */

require("dotenv").config();
const express = require("express");
const { connectToDatabase } = require("./utils/database");
const userRoutes = require("./routes/users");
const listingRoutes = require("./routes/listings");
const transactionRoutes = require("./routes/transactions");

const app = express();
app.use(express.json());

// Connect to the database
connectToDatabase();

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/listings", listingRoutes);
app.use("/api/transactions", transactionRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`NuroAI Marketplace Backend running on port ${PORT}`);
});