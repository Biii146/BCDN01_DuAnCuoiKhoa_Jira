import Axios from 'axios'
import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects'
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';
import { USER_SIGNIN_API, DISPLAY_LOADING, HIDE_LOADING } from '../../constants/JiraTask';
import { jiraService } from '../../services/JiraService';
import {history} from '../../../util/constants/settingSystem'
function* signinSaga(action) {
    // console.log(action)
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500)

    //call API
    try {
        const { data, status } = yield call(() => jiraService.signinJira(action.userLogin))
        localStorage.setItem(TOKEN,data.content.accessToken)
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

        console.log(data)
    } catch (error) {
        console.log(error.response.data)
    }
    yield put({
        type: HIDE_LOADING
    })
}

export function* followSignin() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}