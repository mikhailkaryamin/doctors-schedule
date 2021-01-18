import { combineReducers } from "redux";
import { reducer as doctors } from "./doctors/doctors";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DOCTORS]: doctors,
});
