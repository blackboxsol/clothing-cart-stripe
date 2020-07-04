import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

import CartItem  from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


import CustomButton from  '../custom-button/custom-button.component';

const CartDropdown = ({ cartItems, history, dispatch }) =>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ?
            cartItems.map(item =>
                <CartItem item={item} key={item.id}/>
            )
            : <span className='empaty-cart'>Your cart is empty</span>
        }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
            }}>CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));
