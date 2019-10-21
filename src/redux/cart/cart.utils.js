export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    existingCartItem.quantity += 1;
  } else {
    cartItemToAdd.quantity = 1;
    cartItems.push(cartItemToAdd);
  }

  return cartItems;
};

export const clearItem = (cartItems, itemId) => {
  return cartItems.filter(cartItem => cartItem.id !== itemId);
};
