import { combineReducers } from "redux";

import user from "./user/reducer";
import header from "./header/reducer";

export default combineReducers({
  user,
  header,
});