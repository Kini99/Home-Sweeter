import axios from "axios";
import { BUYPRODUCT_REQUEST, BUYPRODUCT_FAILURE, GET_BUYPRODUCT_SUCCESS } from "../actionType";

export const getProducts =(allParams)=>(dispatch) => {
 
  const queryParams = new URLSearchParams(allParams.params).toString();

  dispatch({type:BUYPRODUCT_REQUEST})
  axios.get(`${process.env.REACT_APP_SERVER}/property/?${queryParams}`)
  .then((res)=>{
    dispatch({type:GET_BUYPRODUCT_SUCCESS,payload:res.data})
  })
  .catch((err)=>{
    dispatch({type:BUYPRODUCT_FAILURE})
  })
};

