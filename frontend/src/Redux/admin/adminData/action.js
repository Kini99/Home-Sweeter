import axios from "axios";
import {
  GET_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
} from "./actionType";

export const getAdmins = (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .get(`http://localhost:8080/admins/`)
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};
