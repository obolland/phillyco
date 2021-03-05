import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import PhotoBox from '../lightbox/lightbox.component';
import SizeModel from '../size-model/sizeModel.component';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl, size } = item;
  const [isPhotoBoxOpen, setIsPhotoBoxOpen] = useState(false)
  const [modal, setModal] = useState(false);

  const photoBoxClickHandler = () => {
    setIsPhotoBoxOpen(true)
  }

  const addToCartClickHandler = () => {
    size ? setModal(true) : addItem(item)
  }

  return (
    <CollectionItemContainer>
      <BackgroundImage
        onClick={photoBoxClickHandler}
        className='image'
        imageUrl={imageUrl} 
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>£{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={addToCartClickHandler} inverted>
        Add to cart
      </AddButton>
      <PhotoBox
        isPhotoBoxOpen={isPhotoBoxOpen}
        setIsPhotoBoxOpen={setIsPhotoBoxOpen}
        images={item.images ? item.images : [imageUrl]}
      />
      <SizeModel modal={modal} setModal={setModal} item={item} addItem={addItem}/>
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