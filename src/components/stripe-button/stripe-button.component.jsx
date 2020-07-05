import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const publishableKey = 'pk_test_51H1Y9TFoH13SyblW8CkmIUFxHpnuN7144AMcEddYuZhoAdZljNYp5rFvsopxbsmQjljJSfccIHUOgePvFUeDUIWa00qRWMe2fe';

const StripeCheckoutButton = ({price}) => {
    const stripeSupportedAmount = price * 100;

    const onToken = (token) => {
        console.log(token);
        alert('Payment successful')
    };

    return (
        <StripeCheckout
            lable = 'Pay Now'
            amount = {stripeSupportedAmount}
            currency = 'USD'
            shippingAddress
            billingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total price is $${price}`}
            panelLabel='Pay Now'
            token = {onToken}
            stripeKey={ publishableKey}
        />
    )
}

export default StripeCheckoutButton;