import _ from "lodash";
import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART
} from "./cart.types";
import { addItemToCart, clearItem } from "./cart.utils";

const selectAction = {
  [TOGGLE_CART_HIDDEN]: toggleCartHidden,
  [ADD_ITEM]: addItem,
  [REMOVE_ITEM]: removeItem,
  [CLEAR_ITEM_FROM_CART]: clearItemFromCart
};

const INITIAL_STATE = {
  hidden: false,
  cartItems: []
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (!Object.keys(selectAction).includes(type)) return state;

  const currentState = _.cloneDeep(state);

  return selectAction[type](currentState, payload);
};

function toggleCartHidden(newState) {
  newState.hidden = !newState.hidden;
  return newState;
}

function addItem(newState, item) {
  newState.cartItems = addItemToCart(newState.cartItems, item);
  return newState;
}

function clearItemFromCart(newState, itemId) {
  newState.cartItems = clearItem(newState.cartItems, itemId);
  return newState;
}

function removeItem(newState, itemId) {
  const removedItem = newState.cartItems.find(item => item.id === itemId);

  if (removedItem.quantity === 1) {
    return clearItemFromCart(newState, itemId);
  }

  removedItem.quantity -= 1;

  return newState;
}

export default userReducer;
