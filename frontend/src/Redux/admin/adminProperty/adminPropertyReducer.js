import {
  ADD_REQUEST_SUCCESS,
  DELETE_REQUEST_SUCCESS,
  GET_REQUEST_SUCCESS,
  PATCH_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  property: [],
};

export const adminPropertyReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        property: payload,
      };
    case ADD_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case PATCH_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case REQUEST_PENDING:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
