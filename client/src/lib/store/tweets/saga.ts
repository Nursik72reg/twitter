import { call, takeEvery, put } from "redux-saga/effects";
import { setTweets, setTweetsLoadingState, TweetActions } from "./actions";
import { TweetsApi } from "../../services/api/tweetsApi";
import { LoadingState } from "./types";

export function* fetchTweetsRequest(): any {
  try {
    const items = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(items));
  } catch (e) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeEvery(TweetActions.FETCH_TWEETS, fetchTweetsRequest);
}
