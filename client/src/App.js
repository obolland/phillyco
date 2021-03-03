import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { GlobalStyles } from './global.styles';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect';


const App = ({ setCurrentUser, currentUser }) => {

  useEffect(() => {
    
    const unsubFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
    
    return () => unsubFromAuth();
  }, [setCurrentUser])

    return (
      <div>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={ContactPage} />
          <Route exact path='/signin' render={() => currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
        <Footer />
      </div>
)};


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);