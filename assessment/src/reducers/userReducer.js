import { CREATE_USER_DATA, LOGIN_DATA } from "../actions";

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_USER_DATA:
    case LOGIN_DATA:
      return {
        ...state,
        userDetails: action.payload
      };

    default:
      return state;
  }
};
