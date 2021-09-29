const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51JewFYBvQuOsEYlX02v5emcd0F9kpf2JwbDo9Wou2yUg9RE5Bx9qsRgJx0Lua0ASUsphVh1AeWBMeavWBGj0xoBK00VAx9ypDT",
);

const app = express();
// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// >>>APIroutes;
app.get("/", (request, response) => response.status(200).send("hello"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment recevied", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // submits of the currency
    currency: "usd",
  });
  // ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.get("/deepak", (request, response)=>response.status(200).send("WHATS UP!"));
// -Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/challenge-570c3/us-central1/api
