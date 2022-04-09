import { LoadingState, TweetsActionsType, TweetState } from "./types";
import produce, { Draft } from "immer";
import { TweetActions } from "./actions";

const initialState: TweetState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetsActionsType) => {
  switch (action.type) {
    case TweetActions.SET_TWEETS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TweetActions.FETCH_TWEETS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    case TweetActions.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    default:
      break;
  }
}, initialState);
