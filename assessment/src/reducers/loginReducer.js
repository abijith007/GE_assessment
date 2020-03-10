import { LOGIN_DATA } from "../actions";

export const loginReducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN_DATA:
      console.log(action.payload);
      return { ...state, loginDetails: action.payload };
    default:
      return state;
  }
};
