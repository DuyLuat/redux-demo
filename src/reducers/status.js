import * as types from './../constanst/actionTypes';

var initialState = false;

var myReducer=(state=initialState,action)=>{
    if(action.type === types.TOGGLE_STATUS){
        // state.status = !state.status;
        return !state;
    }
    return state;
}

export default myReducer;