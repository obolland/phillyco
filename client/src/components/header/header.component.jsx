  
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { Icon } from '@iconify/react';
import instagramLogoLight from '@iconify/icons-ph/instagram-logo-light';

import logo from '../../assets/PhillyCo..png';


import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  SocialMedia
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <img src={logo} alt="logo" />
    </LogoContainer>
    <OptionsContainer>
      <SocialMedia visibility>
        <a target="_blank" href="https://instagram.com/phillyco_?igshid=dqz17tvguhl"><Icon icon={instagramLogoLight} /></a>
      </SocialMedia>
      {/* <OptionLink to='/shop'>SHOP</OptionLink> */}
      <OptionLink to='/about'>ABOUT</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);