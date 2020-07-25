import React, {useReducer} from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import Axios from "axios"
import {
    SEARCH_USERS,
    GET_USERS,
    CLEAR_USERS,
    GET_REPOS,

} from '../types.js';

const GithubState=props=>{
    const initialState={
        users:[],
        user:{},
        repos:[],
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    //Search User
    const searchUsers=async value=>{
        const res=await Axios.get(`https://api.github.com/search/users?q=${value}`);
        dispatch({type:SEARCH_USERS,
        payload:res.data.items})
    }
    //Clear User
    const clearUsers=()=>{
        dispatch({type:CLEAR_USERS})
    }
    
    //Get User
    const getUser=async (username)=>{
        const res=await Axios.get(`https://api.github.com/users/${username}`);
        dispatch({type:GET_USERS,payload:res.data})
    
    }
    //Get user repo

    const getUserRepos=async (username)=>{
        const res=await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
        dispatch({type:GET_REPOS, payload:res.data})
      }
    









    return (
        <GithubContext.Provider value={{
            users:state.users,
            user:state.user,
            repos:state.repos,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}>
            {props.children}
        </GithubContext.Provider>
    )

}
export default GithubState;
