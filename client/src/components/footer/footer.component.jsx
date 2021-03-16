import React from 'react';

import {FooterContainer, TheCreatorContainer, CopyrightContainer, OptionLink, OptionsContainer} from './footer.styles';

const Footer = () => (
    <FooterContainer>
        <OptionsContainer>
            <OptionLink to='/delivery-returns'>Delivery & Returns</OptionLink>
        </OptionsContainer>
        <CopyrightContainer>
            <span>PhillyCo© All Rights Reserved</span>
        </CopyrightContainer>
        <TheCreatorContainer>
        <a href="https://ollybolland.com" target="_blank">Created by ollybolland.com</a>
        </TheCreatorContainer>
    </FooterContainer>
)

export default Footer;