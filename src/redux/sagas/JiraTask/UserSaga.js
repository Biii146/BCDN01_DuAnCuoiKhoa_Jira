import Axios from 'axios'
import {call, delay, fork, take, takeEvery, takeLatest, put} from 'redux-saga/effects'
import { USER_SIGNIN_API } from '../../constants/JiraTask';
import { jiraService } from '../../services/JiraService';

function * signinSaga(action){
    console.log(action)
    //call API
    try{
        const {data,status} = yield jiraService.signinJira(action.userLogin)
        console.log(data)
    }catch(error){
        console.log(error.response.data)
    }
}

export function * followSignin(){
    yield takeLatest(USER_SIGNIN_API,signinSaga);
}