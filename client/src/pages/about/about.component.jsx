import React from 'react';

import {AboutPageContainer, AboutPageImage, Title, MainText, MainTextTitle} from './about.styles';

const AboutPage = () => (
    
    <AboutPageContainer>
        <AboutPageImage src='https://i1.lensdump.com/i/I1jnLD.jpg' alt='' />
        <Title>A<u>BOUT U</u>S</Title>
        <MainText>
          <MainTextTitle>Sustainable, without compromise</MainTextTitle>
          Nothing beats the great outdoors and the smell of adventure in the air. 
          We have so much respect for this insane planet and what it has to offer us, 
          that we want to do what we can to support it. Our aim is to use sustainable, 
          carbon neutral materials and zero plastic in our packaging, so you can look 
          after the planet whilst looking cool AF doing it. All the graphics are first on paper, 
          before being screen printed on to our quality materials. 
          This is clothing for those with freedom in their hearts and fire in their souls.<br />Live free.
        </MainText>
    </AboutPageContainer>
);


export default AboutPage;