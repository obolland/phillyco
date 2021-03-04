import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
 
const PhotoBox = ({ isPhotoBoxOpen, setIsPhotoBoxOpen, images }) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <div>
      {isPhotoBoxOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsPhotoBoxOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length,)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length,)
          }
        />
      )}
    </div>
  );
}

export default PhotoBox;