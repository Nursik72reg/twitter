import { all } from "redux-saga/effects";
import { tweetSaga } from "./tweets/saga";

export default function* rootSaga() {
  yield all([tweetSaga()]);
}
