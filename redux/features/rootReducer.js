import { combineReducers } from "@reduxjs/toolkit";
import fackDataSlice from "./fakeData/fackDataSlice";

const rootReducer = combineReducers({
  user: fackDataSlice,
});
export default rootReducer;
