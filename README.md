# Neobonk - Clothing full stack Ecommerce store

Ecommerce clothing store based on MERN stack. RWD friendly :).

## Tech stack

- MongoDB for store: users, orders, items to sell
- Express and mongoose to send request, post new users, orders. For authentication I use JsonWebToken.
- React with styled components and axios to create UI and fetch data from express server
- Redux to keep logged user information and cart
- Stripe to implement testing payments

## Instructions

### Live project is available here: https://neobonk.onrender.com/

### Run local aplication

1. Run backend from _api_ folder using `npm run start`.
2. Run client from _client_ folder using `npm run start`.
3. For backend provide .env keys for: MongoDB connection, cryptoJS.AES Secret Passphrase, JWT: key, Stripe key
