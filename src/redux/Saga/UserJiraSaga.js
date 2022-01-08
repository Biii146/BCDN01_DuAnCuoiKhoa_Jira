import Axios from 'axios'
import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects';
import { cyberbugService } from '../../Services/CyberbugService';
import { TOKEN, USER_LOGIN } from '../../util/constants/settingSystem';
import { USER_SIGNIN_API } from '../constants/JiraCyber';
import { DISPLAY_LOADING, HIDE_LOADING } from '../constants/LoadingConst';



// nơi này để quản lý các action Saga
// gọi API
function * signinSaga(action) {
    console.log(action);
    // delay
    yield delay (500);
    yield put({
        type: DISPLAY_LOADING
    })

    // Call API
    try{
        const {data, status} = yield cyberbugService.signinCyberBugs(action.userLogin);
        // lưu vào localstorage
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));


        console.log(data);
        
    }catch(err){
        console.log(err.response.data)
    }
    yield put({
        type: HIDE_LOADING
    })
}

export function * theoDoiSignin() {
    yield takeLatest(USER_SIGNIN_API,signinSaga );
}