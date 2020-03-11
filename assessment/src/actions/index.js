import Axios from "axios";

export const CREATE_USER_DATA = "CREATE_USER_DATA";
export const LOGIN_DATA = "LOGIN_DATA";
export const UPDATE_USER_DATA = "UPDATE_USER_DATA";

export function createUserData(userData) {
  return dispatch => {
    console.log(userData);
    userData.id = 0;
    Axios.post("http://localhost:4000/users/", userData).then(res => {
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

export function updateUserData(userData) {
  return dispatch => {
    Axios.get(
      "http://localhost:4000/users/" +
        userData.username +
        "/" +
        userData.password
    ).then(res => {
      userData.id = res.data.id;
      console.log("id", res);
      Axios.put("http://localhost:4000/users", userData)
        .then(res => {
          console.log(res.data);
          dispatch({ type: UPDATE_USER_DATA, payload: userData });
        })
        .catch(error => {
          console.log(error);
        });
    });
  };
}
