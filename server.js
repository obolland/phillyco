
const cors = require('cors');
const express = require('express');
const path = require('path');
// const firestore = require('./client/src/firebase/firebase.utils')

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}

let line_items;
app.post('/checkout-data', (req, res) => {
  line_items = req.body.map(item => {
    return {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: item.name,
            description: item.selectedSize,
            images: [item.imageUrl],
          },
          unit_amount: item.title === 'prints' ? item.sizePrice[item.selectedSize] * 100 : item.price * 100,
        },
      quantity: item.quantity,
    }
  });
    res.send('Checkout data Added Successfuly')
})


const YOUR_DOMAIN = process.env.NODE_ENV !== "production" ? 
'http://localhost:3000/checkout' : 'https://phillyco-live.herokuapp.com/checkout';

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

app.listen(port, () => console.log(`Running on port ${port}`));