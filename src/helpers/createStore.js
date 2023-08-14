import { createStore, applyMiddleware } from "redux";
import reducers from "../redux/reducers";

export default () => {
  const store = createStore(reducers, {});
  return store;
};
