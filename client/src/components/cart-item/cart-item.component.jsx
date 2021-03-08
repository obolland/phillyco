import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity, selectedSize } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name} - {selectedSize}</span>
      <span>
        {quantity} x £{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;