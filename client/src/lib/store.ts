import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./store/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/rootSaga";
import { TweetState } from "./store/tweets/types";

export interface RootState {
  tweets: TweetState;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
