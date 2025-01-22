# Nora AI Marketplace Backend

This backend handles the core functionality for the Nora AI Marketplace, facilitating the trading and renting of AI models and datasets.

## Features

- **User Management**: Wallet-based user registration and authentication.
- **Listings Management**: Create and retrieve AI model and dataset listings.
- **Transaction Management**: Purchase and rent functionality with Solana blockchain integration.
- **Database**: MongoDB for data persistence.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nora AI/marketplace-backend.git
   cd marketplace-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```plaintext
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/Nora AI-marketplace
   BLOCKCHAIN_URL=https://mainnet-beta.solana.com
   ```

4. Start the server:
   ```bash
   node index.js
   ```

## API Endpoints

### User Routes
- **POST `/api/users/register`**: Register a user.

### Listing Routes
- **GET `/api/listings`**: Fetch all listings.
- **POST `/api/listings`**: Create a new listing.

### Transaction Routes
- **POST `/api/transactions`**: Initiate a transaction.

## License

Licensed under the MIT License.