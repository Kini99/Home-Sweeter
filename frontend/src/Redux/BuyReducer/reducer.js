import {
    GET_BUYPRODUCT_SUCCESS,
    BUYPRODUCT_FAILURE,
    BUYPRODUCT_REQUEST,
  } from "../actionType";
  
  const initState = {
    isLoading: false,
    isError: false,
    product: [],
  };
  export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case BUYPRODUCT_REQUEST: {
        return { ...state, isLoading: true };
      }
      case BUYPRODUCT_FAILURE: {
        return { ...state, isLoading: false, isError: true };
      }
      case GET_BUYPRODUCT_SUCCESS: {
        return { ...state, isLoading: false, product: payload };
      }
      default: {
        return state;
      }
    }
  };