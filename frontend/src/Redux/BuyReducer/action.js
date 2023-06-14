import axios from "axios";
import { BUYPRODUCT_REQUEST, BUYPRODUCT_FAILURE, GET_BUYPRODUCT_SUCCESS } from "../actionType";

export const getProducts =()=>(dispatch) => {
  //console.log(allParams)
  // Write logic here
  dispatch({type:BUYPRODUCT_REQUEST})
  axios.get(`http://localhost:8080/property`).then((res)=>{
     console.log(res.data)
    dispatch({type:GET_BUYPRODUCT_SUCCESS,payload:res.data})
  }).catch((err)=>{
    dispatch({type:BUYPRODUCT_FAILURE})
  })
};