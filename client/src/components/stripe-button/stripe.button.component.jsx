import React from 'react';

import axios from 'axios';

import StripeCheckout from 'react-stripe-checkout';

const TheStripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HsU13KfqoJqYlMIjzYUCqOrTK2ir9667kEP2SuxLc7GeSuuskLd2TTxty4vdflHDCRCnPpUuOYqoygZMGb1OQ4G00jxacetm0'

    const onToken = token => {
        axios({
            url:'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Payment Successful');
        }).catch(error => {
            console.log("Payment error :", JSON.parse(error));
            alert('There was an issue with your payment')
        })
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clths Clothing Ltd'
            billingAddress
            shippingAddress
            currency='GBP'
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is £${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default TheStripeCheckoutButton;