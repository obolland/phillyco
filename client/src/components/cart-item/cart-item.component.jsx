import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item }) => {
const { imageUrl, selectedSize, name, quantity, price, title } = item;

return (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name} - {selectedSize}</span>
      <span>
        {quantity} x £{title === 'prints' ? item.sizePrice[selectedSize] : price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)};

export default CartItem;