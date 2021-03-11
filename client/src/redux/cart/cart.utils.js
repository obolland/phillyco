
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id && cartItem.selectedSize && cartItem.selectedSize === cartItemToAdd.selectedSize)
  
  if (existingCartItem) {
      return cartItems.map(cartItem =>
          cartItem === existingCartItem
          ? {...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}]
}
  

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id && cartItem.selectedSize && cartItem.selectedSize === cartItemToRemove.selectedSize
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem !== existingCartItem);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id && cartItem.selectedSize && cartItem.selectedSize === cartItemToRemove.selectedSize
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};


export const clearItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id && cartItem.selectedSize && cartItem.selectedSize === cartItemToRemove.selectedSize
  );

  return cartItems.filter(cartItem => cartItem !== existingCartItem);
}; 
