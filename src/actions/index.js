import axios from "axios";

export function loadGreetings() {
  return function (dispatch) {
    return axios.get("http://localhost:3000/greetings").then((response) => {
      dispatch(setGreetings(response.data));
    });
  };
}