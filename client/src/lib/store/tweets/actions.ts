import {
  FetchTweetActionInterface,
  LoadingState,
  SetTweetActionInterface,
  SetTweetLoadingStateActionInterface,
  TweetState,
} from "./types";

export enum TweetActions {
  SET_TWEETS = "tweets/set_tweets",
  FETCH_TWEETS = "tweets/fetch_tweets",
  SET_LOADING_STATE = "tweets/set_loading_state",
}

export const fetchTweets = (): FetchTweetActionInterface => ({
  type: TweetActions.FETCH_TWEETS,
});

export const setTweets = (payload: TweetState["items"]): SetTweetActionInterface => ({
  type: TweetActions.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetLoadingStateActionInterface => ({
  type: TweetActions.SET_LOADING_STATE,
  payload,
});
