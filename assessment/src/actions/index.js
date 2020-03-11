import Axios from "axios";

export const CREATE_USER_DATA = "CREATE_USER_DATA";
export const LOGIN_DATA = "LOGIN_DATA";

export function createUserData(userData) {
  return dispatch => {
    console.log(userData);
    Axios.get("http://localhost:4000/users/", userData).then(res => {
      alert("User has been Successfully Added");
    });
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
    if (window.confirm("Are u sure?")) {
      Axios.delete(
        "http://localhost:4000/users/remove/" +
          userData.username +
          "/" +
          userData.password
      )

        .then(response => {
          console.log(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
}
