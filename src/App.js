import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/home-page';
import ShopPage from './pages/shop/shop-page';
import CollectionPage from './pages/collection/collection-page';
import CheckoutPage from './pages/checkout/checkout-page';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import setCurrentUser from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {

  unsubScribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubScribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      setCurrentUser(userAuth);
    });

  }

  componentWillUnmount() {
    this.unsubScribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/boutique-clothing" component={HomePage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:collectionId" component={CollectionPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='' />) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
