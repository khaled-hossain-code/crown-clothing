import _ from "lodash";
import { TOGGLE_CART_HIDDEN } from "./cart.types";

const selectAction = {
  [TOGGLE_CART_HIDDEN]: toggleCartHidden
};

const INITIAL_STATE = {
  hidden: true
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

export default userReducer;
