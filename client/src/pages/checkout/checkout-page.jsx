import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selector';
import  CheckoutItem   from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


import './checkout-page.styles.scss';

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            )
        }
        <div className='total'>
            <span>TOTAL: ${totalPrice}</span>
        </div>
        <div className='test-warning'>
            *Please use the follwoing test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/30 - CVV: 143
        </div>
        <StripeCheckoutButton price={totalPrice}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);