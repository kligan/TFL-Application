import { combineReducers } from "redux";
import { reducer, cycleReducer } from "./reducer";

const reducers = combineReducers({
  serviceReducers: reducer,
  cycleReducers: cycleReducer,
});

export type RootState = ReturnType<typeof reducers>;
export default reducers;
