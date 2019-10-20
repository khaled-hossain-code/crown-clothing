import _ from "lodash";
import { TOGGLE_CART_HIDDEN, ADD_ITEM } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const selectAction = {
  [TOGGLE_CART_HIDDEN]: toggleCartHidden,
  [ADD_ITEM]: addItem
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

function addItem(newState, payload) {
  newState.cartItems = addItemToCart(newState.cartItems, payload);
  return newState;
}

export default userReducer;
