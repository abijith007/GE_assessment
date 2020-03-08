import { USER_DATA } from "../actions";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case USER_DATA:
      return {
        ...state,
        userDetails: action.payload
      };
    default:
      return state;
  }
};
