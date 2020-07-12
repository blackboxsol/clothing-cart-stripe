import React, {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/home-page';
import ShopPage from './pages/shop/shop-page';
import CheckoutPage from './pages/checkout/checkout-page';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {checkUserSession} from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';


const App = ({ checkUserSession, currentUser }) => {

  useEffect( () => {
    checkUserSession();
  },[checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/boutique-clothing" component={HomePage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => currentUser ? (<Redirect to='' />) : (<SignInAndSignUpPage/>)} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
