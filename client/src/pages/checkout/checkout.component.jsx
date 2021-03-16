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

import {emptyCart} from '../../redux/cart/cart.actions';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  WarningContainer,
  TotalsContainer
} from './checkout.styles';

//note add in .env
const stripePromise = loadStripe("pk_test_51IMxMtKpm1GeJPFbXJ4y1kmUKngDr8J3sodWE5cr52KrKNvQ6imM6eYc2KMHNFM38uIKceHYlXIgZv0EP6Bwj62A00B3Ee7MEV");

const CheckoutPage = ({ cartItems, total, emptyCart }) => {
  const [message, setMessage] = useState("");
  const deliveryCost = 3.50;
  const subTotal = Math.round((total + Number.EPSILON) * 100) / 100; //rounding total to 2 decimal places
  const _total = Math.round(((subTotal + deliveryCost) + Number.EPSILON) * 100) / 100
  const _cartItems = [...cartItems, {name: 'Shipping', selectedSize: 'Shipping', imageUrl: "https://i2.lensdump.com/i/IdGcUD.png", price: 3.50, title: 'shipping', quantity: 1}]

  const handleClick = async (event) => {
    axios.post('/checkout-data', _cartItems)
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
      setMessage("Order recieved! Thank you for shopping with us, see you next time.");
      emptyCart();
    }
      
  }, [emptyCart]);


return message ? (<Message message={message} /> ) 
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
    {/* <SubTotalContainer>SUB-TOTAL: £{_total}</SubTotalContainer>
    <DeliveryContainer>DELIVERY: £3.50</DeliveryContainer>
    <TotalContainer>TOTAL: £{_total}</TotalContainer> */}
    { cartItems[0] &&
      <TotalsContainer>
      <tr>
        <th className='smaller'>SUB-TOTAL:</th>
        <td className='smaller'>£{subTotal}</td>
      </tr>
      <tr>
        <th className='smaller'>DELIVERY:</th>
        <td className='smaller'>£{deliveryCost + '0'}</td>
      </tr>
      <tr>
        <th>TOTAL:</th>
        <td>£{_total}
        </td>
      </tr>
      </TotalsContainer>
    }
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

const mapDispatchToProps = dispatch => ({
  emptyCart: () => dispatch(emptyCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);