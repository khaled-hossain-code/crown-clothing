import _ from "lodash";
import { SET_CURRENT_USER } from "./user.types";

const selectAction = {
  [SET_CURRENT_USER]: setCurrentUser,
};

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  if (!Object.keys(selectAction).includes(type)) return state;

  const currentState = _.cloneDeep(state);

  return selectAction[type](currentState, payload);
};

function setCurrentUser(newState, payload) {
  newState.currentUser = payload;
  return newState;
}

export default userReducer;
