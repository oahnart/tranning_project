import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default function initSotre() {
  const store = createStore(reducers, applyMiddleware(thunk));
  return store;
}
