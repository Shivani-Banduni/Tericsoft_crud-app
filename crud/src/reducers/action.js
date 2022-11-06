// Write the action object creators in this file
import * as types from'./actionTypes'
const datarequest=()=>{
    return{
        type:types.GET_DATA_DETAILS_REQUEST
    }
  }
  const datasucess=(payload)=>{
    return{
        type:types.GET_DATA_DETAILS_SUCCESS,
        payload,
    }
  }
  const dataerror=()=>{
        return{
            type:types.GET_DATA_DETAILS_FAILURE
        }
  }

  export {dataerror,datarequest,datasucess  }