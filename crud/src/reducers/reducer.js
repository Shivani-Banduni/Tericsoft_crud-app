import * as types from './actionTypes'
const initialState = {
  Data: [],
  isLoading: false,
  isError: false,
};
const reducer = (oldState = initialState,action) => {


  const {type,payload}=action
    switch(action.type){
            case types.GET_DATA_DETAILS_REQUEST:
                return{
                    ...oldState, isLoading:true,isError:false
                }

                case types.GET_DATA_DETAILS_SUCCESS:
                    return{
                        ...oldState, isLoading:false,isError:false,
                        Data:[...payload]
                    }

                    case types.GET_DATA_DETAILS_FAILURE:
                        return{
                            ...oldState, isLoading:false,isError:true
                        }
        default:





  



  
  return oldState;
};
}

export { reducer };
