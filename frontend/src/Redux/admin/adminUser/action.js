import axios from "axios";
import {
  GET_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
} from "./actionType";

export const getUsers = (dispatch) => {
  dispatch({ type: REQUEST_LOADING });

  axios
    .get(`${process.env.REACT_APP_SERVER}/users/`)
    .then((res) => {
      dispatch({ type: GET_REQUEST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: REQUEST_PENDING });
    });
};
