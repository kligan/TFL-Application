import { ActionTypes } from "../constants/action-types";

const initialState = {
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: payload };

    default:
      return state;
  }
};

export const cycleReducer = (state = { data: [] }, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CYCLE_POINTS:
      return { ...state, data: payload };

    default:
      return state;
  }
};
