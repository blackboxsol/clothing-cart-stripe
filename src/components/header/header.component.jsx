import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector} from 'reselect';

//import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { signOutStart } from '../../redux/user/user.actions'
import { HeaderContainer, LogoContaier, OptionsContainer, OptionLink, OptionDiv } from './header.styles';


import {ReactComponent as Logo} from '../../assets/crown.svg';

const Header = ( {currentUser, hidden, signOutStart}) => (
    /**
     * 
     * traditional css
     *
    <div className='header'>
        <Link className='logo' to='/'>
            <Logo />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
        

    </div>
    */
   <HeaderContainer>
        <LogoContaier to='/'>
            <Logo />
        </LogoContaier>

        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={signOutStart}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
)

/**
 * traditional selector
 * @param {*} state 
 
const mapStateToProps = (state) => ({
    currentUser : selectCurrentUser(state),
    hidden: selectCartHidden(state)
})
*/
const mapStateToProps = createStructuredSelector ({
    currentUser : selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch =>({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);