
const cors = require('cors');
const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.use(express.static('.'));
app.use(cors());
app.use(express.json());


let line_items;
app.post('/checkout-data', (req, res) => {
  line_items = req.body.map(item => {
    return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.name,
            images: [item.imageUrl],
          },
          unit_amount: item.price * 100,
        },
      quantity: item.quantity,
    }
  });
    res.send('Data Added Successfuly')
})


const YOUR_DOMAIN = 'http://localhost:3000/checkout';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
        allowed_countries: ['GB'],
      },
    line_items,
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });
  res.json({ id: session.id });
});
app.listen(5000, () => console.log('Running on port 5000'));