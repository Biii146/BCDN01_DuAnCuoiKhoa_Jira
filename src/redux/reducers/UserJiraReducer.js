import { USER_LOGIN } from "../../util/constants/settingSystem";
import { USLOGIN } from "../constants/JiraCyber";

let usLogin = {};

if(localStorage.getItem(USER_LOGIN)){
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin : usLogin, 
    userSearch: []
}

export const UserLoginJiraReducer = (state = stateDefault,action) =>{
    switch(action.type){
        case USLOGIN:{
            state.userLogin = action.userLogin;
            return {...state}
        }
        case 'GET_USER_SEARCH':{
            state.userSearch = action.lstuserSearch;
            console.log('stateUser',state);
            return {...state}
        }
        default : return {...state}
    }
}