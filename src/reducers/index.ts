import { combineReducers } from "redux";
import bannerReducer from "./bannerSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
  bannerReducer,
  userReducer
});

export type RootState = ReturnType<typeof rootReducer>;
