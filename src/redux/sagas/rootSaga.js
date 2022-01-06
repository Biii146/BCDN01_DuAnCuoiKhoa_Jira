import {all} from "redux-saga/effects";
import * as JiraTask from './JiraTask/UserSaga'
import {jiraService} from '../services/JiraService'

export function * rootSaga(){
    yield all([
        JiraTask.followSignin()
    ])
}
