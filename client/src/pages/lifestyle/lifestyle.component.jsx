import React from 'react';
import { LifestylePageContainer, VideoContainer } from './lifestyle.styles';

const iframe2 = '<iframe src="https://player.vimeo.com/video/519551315"  width="500px" height="500px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
const iframe1 = '<iframe src="https://player.vimeo.com/video/522727805"  width="500px" height="500px" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'

const LifestylePage = () =>
(
  <LifestylePageContainer clasName='page'>
    <VideoContainer dangerouslySetInnerHTML={ {__html: iframe1 ? iframe1 : null}} />
    <VideoContainer dangerouslySetInnerHTML={ {__html: iframe2 ? iframe2 : null}} />
  </LifestylePageContainer>
);


export default LifestylePage;