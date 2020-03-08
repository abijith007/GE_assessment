export const USER_DATA = "USER_DATA";

export function setUserData(userData) {
  return {
    type: USER_DATA,
    payload: userData
  };
}
