import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const publishableKey = 'pk_test_51H1Y9TFoH13SyblW8CkmIUFxHpnuN7144AMcEddYuZhoAdZljNYp5rFvsopxbsmQjljJSfccIHUOgePvFUeDUIWa00qRWMe2fe';

const StripeCheckoutButton = ({price}) => {
    const stripeSupportedAmount = price * 100;

    const onToken = (token) => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripeSupportedAmount,
                token
            }
        }).then(response =>{
            alert('Payment successful');
            console.log(response);
        }).catch( error => {
            alert('Payment failed');
            console.log('Payment error: ' + error);
        })
        
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