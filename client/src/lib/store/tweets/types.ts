import { Action } from "redux";
import { TweetActions } from "./actions";

export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface Tweet {
  _id: string;
  text: string;
  user: {
    fullName: string;
    userName: string;
    avatarUrl: string;
  };
}

export interface TweetState {
  items: Tweet[];
  loadingState: LoadingState;
}

export interface SetTweetActionInterface extends Action<TweetActions> {
  type: TweetActions.SET_TWEETS;
  payload: TweetState["items"];
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActions> {
  type: TweetActions.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchTweetActionInterface extends Action<TweetActions> {
  type: TweetActions.FETCH_TWEETS;
}

export type TweetsActionsType =
  | SetTweetActionInterface
  | FetchTweetActionInterface
  | SetTweetLoadingStateActionInterface;
