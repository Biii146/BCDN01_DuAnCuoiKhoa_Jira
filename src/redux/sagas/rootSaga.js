import {all} from "redux-saga/effects";
import * as JiraTask from './JiraTask/UserSaga'

export function * rootSaga(){
    yield all([
        JiraTask.followSignin()
    ])
}
