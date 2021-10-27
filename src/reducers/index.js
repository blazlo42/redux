import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./logged";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loggedReducer,
});
export default rootReducer;
