import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
//import { loginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  userData: userReducer
  //loginData: loginReducer
});

export default rootReducer;
