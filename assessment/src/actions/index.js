export const CREATE_USER_DATA = "CREATE_USER_DATA";
export const LOGIN_DATA = "LOGIN_DATA";

export function setUserData(userData) {
  return {
    type: CREATE_USER_DATA,
    payload: userData
  };
}

export function setLoginData(loginData) {
  return {
    type: LOGIN_DATA,
    payload: loginData
  };
}
