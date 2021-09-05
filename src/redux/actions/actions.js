import { ActionTypes } from "../constants/action-types";
export const actions = (items) => {
  return {
    type: ActionTypes.SET_DATA,
    payload: items,
  };
};

export const cyclePointsAction = (items) => {
  return {
    type: ActionTypes.SET_CYCLE_POINTS,
    payload: items,
  };
};

// export default actions;
