import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART
} from "./cart.types";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  payload: itemId
});

export const clearItemFromCart = itemId => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: itemId
});
