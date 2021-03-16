import React from 'react';

import { useHistory } from "react-router-dom";

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import CustomButton from '../custom-button/custom-button.component';

import {ButtonContainer} from './stripe.button.styles';

const StripeCheckoutButton = ( {handleClick, isSignedIn } ) => {
      
    let history = useHistory();
      
    const handleCreateAccountClick = () => {
        history.push("/SignIn");
    }
    

    return (
          isSignedIn ? (
            <CustomButton id="checkout-button" role="link" onClick={handleClick}>
              Checkout
            </CustomButton>
          ) :
          (
            <ButtonContainer>
            <CustomButton onClick={handleCreateAccountClick} margin>
              Create Account
            </CustomButton>

            <CustomButton id="checkout-button" role="link" onClick={handleClick}>
              Checkout As Guest
            </CustomButton>
            </ButtonContainer> 
          )
      )
}

const mapStateToProps = createStructuredSelector({
    isSignedIn: selectCurrentUser
  });

export default connect(mapStateToProps)(StripeCheckoutButton);