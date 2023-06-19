import {
  GET_REQUEST_SUCCESS,
  REQUEST_LOADING,
  REQUEST_PENDING,
} from "../adminProperty/actionType";

const initialState = {
  isLoading: false,
  isError: false,
  person: [],
};

export const adminUserReducer = (state = initialState, action) => {
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
        person: payload,
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
