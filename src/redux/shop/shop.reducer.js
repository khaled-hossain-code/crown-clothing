import _ from "lodash";
import { UPDATE_COLLECTIONS } from "./shop.types";

const INITIAL_STATE = {
  collections: null
};

const selectAction = { [UPDATE_COLLECTIONS]: updateCollections };

const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (!Object.keys(selectAction).includes(type)) return state;

  const currentState = _.cloneDeep(state);

  return selectAction[type](currentState, payload);
};

function updateCollections(newState, collections) {
  newState.collections = collections;
  return newState;
}

export default shopReducer;
