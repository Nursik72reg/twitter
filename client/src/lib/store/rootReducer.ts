import { combineReducers } from "redux";
import { tweetReducer } from "./tweets/reducer";

export const rootReducer = combineReducers({
  tweets: tweetReducer,
});
