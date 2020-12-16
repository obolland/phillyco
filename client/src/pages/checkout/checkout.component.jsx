import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';

import StripeCheckoutButton from '../../components/stripe-button/stripe.button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import Message from '../../components/checkout-message/checkout-message.component';

import { loadStripe } from "@stripe/stripe-js";

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const stripePromise = loadStripe("pk_test_51HyeIDAxgCFzf4P5rxdxA4ySaIq9fggg5nFFMX0DfYieCRejAkDsMyqTn4CRp2jTkqkfsAhid9EhYBiAnfwGIwDu00TPPoRkAk");

const CheckoutPage = ({ cartItems, total }) => {
  const [message, setMessage] = useState("");

  const handleClick = async (event) => {

    axios.post('/checkout-data', cartItems)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
    const stripe = await stripePromise;
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      alert('Payment failed, try again or contact us to discuss another payment method. Error: '+result.error.message)
    }
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }
  }, []);

return message ? (<Message message={message} />) 
  : (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: £{total}</TotalContainer>
    <StripeCheckoutButton handleClick={handleClick} />
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4000 0582 6000 0005 - Exp: 01/22 - CVV: 123
    </WarningContainer>
  </CheckoutPageContainer>
)};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);