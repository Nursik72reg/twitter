import axios from "axios";
import { TweetState } from "../../store/tweets/types";

export const TweetsApi = {
  fetchTweets: (): Promise<TweetState["items"]> => {
    return axios.get("https://trycode.pw/c/AL9C4.json").then(({ data }) => data);
  },
};
