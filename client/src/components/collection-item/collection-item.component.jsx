import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import PhotoBox from '../../components/lightbox/lightbox.component';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  const [isPhotoBoxOpen, setIsPhotoBoxOpen] = useState(false)

  const clickHandler = () => {
    setIsPhotoBoxOpen(true)
  }

  return (
    <CollectionItemContainer>
      <BackgroundImage
        onClick={clickHandler}
        className='image'
        imageUrl={imageUrl} 
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>£{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
      <PhotoBox isPhotoBoxOpen={isPhotoBoxOpen} setIsPhotoBoxOpen={setIsPhotoBoxOpen} images={item.images} />
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);