import React from 'react';

import {FooterContainer, SocialContainer, TheCreatorContainer, CopyrightContainer} from './footer.styles';

import { Icon } from '@iconify/react';
import instagramLogoLight from '@iconify/icons-ph/instagram-logo-light';

const Footer = () => (
    <FooterContainer>
        <SocialContainer>
            <span>
                <a target="_blank" href="https://instagram.com/pipbolland">
                <Icon icon={instagramLogoLight} /></a>
            </span>
        </SocialContainer>
        <CopyrightContainer>
            PhillyCo© All Rights Reserved
        </CopyrightContainer>
        <TheCreatorContainer>
            Created by ollybolland.com
        </TheCreatorContainer>
    </FooterContainer>
)

export default Footer;