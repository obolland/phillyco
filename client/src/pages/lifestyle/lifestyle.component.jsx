import React from 'react';
import { LifestylePageContainer, VideoContainer, TextContainer, Image, Text, TextTitle, TextSubTitle, SecondTextContainer } from './lifestyle.styles';

const iframe = '<iframe src="https://player.vimeo.com/video/519551315" width="500px" height="500px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'

const LifestylePage = () =>
(
  <LifestylePageContainer>
    <VideoContainer dangerouslySetInnerHTML={ {__html: iframe ? iframe : null}} />
    <TextContainer>
      <TextTitle>Sun, sea, surf</TextTitle>
      <TextSubTitle>...& bikes</TextSubTitle>
      <Text>
        Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things
        Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things
        Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things
      </Text> 
    </TextContainer>
    <SecondTextContainer>
      <TextTitle>Adventure, wild times & freedom</TextTitle>
      <TextSubTitle>...& more bikes</TextSubTitle>
      <Text>
        Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things
        Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things
        Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things Stuff and things
      </Text>
    </SecondTextContainer>
      <Image src='https://i1.lensdump.com/i/I1jnLD.jpg' alt=''/>
  </LifestylePageContainer>
);


export default LifestylePage;