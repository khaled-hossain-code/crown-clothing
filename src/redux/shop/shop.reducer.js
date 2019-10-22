import _ from "lodash";
import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const selectAction = {};

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (!Object.keys(selectAction).includes(type)) return state;

  const currentState = _.cloneDeep(state);

  return selectAction[type](currentState, payload);
};

export default shopReducer;
