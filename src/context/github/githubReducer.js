import {
    SEARCH_USERS,
    GET_USERS,
    CLEAR_USERS,
    GET_REPOS,
    // GET_REPOS,
    // SET_ALERT

} from '../types.js';

export default (state,action)=>{
    switch(action.type){
        case SEARCH_USERS:
            return{
                ...state,
                users:action.payload
            }
        case CLEAR_USERS:
            return{
                ...state,
                users:[]
            }
        case GET_USERS:
            return{
                ...state,
                user:action.payload
            }
        case GET_REPOS:
            return{
                ...state,
                repos:action.payload
            }
        default:
            return state;
    }

}