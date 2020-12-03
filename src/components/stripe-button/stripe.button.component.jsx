import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const TheStripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HsU13KfqoJqYlMIjzYUCqOrTK2ir9667kEP2SuxLc7GeSuuskLd2TTxty4vdflHDCRCnPpUuOYqoygZMGb1OQ4G00jxacetm0'

    const onToken = token => {
        console.log(token);
        alert('You bloody bought it, what a bloody successful bloody payment. You bloody legend!')
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