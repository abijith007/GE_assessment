import Axios from "axios";

export const CREATE_USER_DATA = "CREATE_USER_DATA";
export const LOGIN_DATA = "LOGIN_DATA";

export function setUserData(userData) {
  return {
    type: CREATE_USER_DATA,
    payload: userData
  };
}

export function setLoginData(loginData) {
  return dispatch => {
    Axios.get(
      "http://localhost:4000/users/" +
        loginData.username +
        "/" +
        loginData.password
    ).then(res => {
      dispatch({ type: LOGIN_DATA, payload: res.data });
    });
  };
}

export function deleteUserData(userData) {
  return dispatch => {
    Axios.get(
      "http://localhost:4000/users/remove/" +
        userData.username +
        "/" +
        userData.password
    ).then(res => {
      alert("User has been deleted")
    });
  };
  
}