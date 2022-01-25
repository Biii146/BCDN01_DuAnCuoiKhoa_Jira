import Axios from 'axios'
import { call, delay, fork, take, takeEvery, takeLatest, put, select } from 'redux-saga/effects';
import { cyberbugService } from '../../Services/CyberbugService';
import { userService } from '../../Services/UserServices';
import { TOKEN, USER_LOGIN } from '../../util/constants/settingSystem';
import { USER_SIGNIN_API, USLOGIN } from '../constants/JiraCyber';
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
        const {data, status} = yield call(()=>  cyberbugService.signinCyberBugs(action.userLogin));
        // lưu vào localstorage
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content));

        yield put({
            type:USLOGIN,
            userLogin: data.userLogin
        })

        let history = yield select( state => state.HistoryReducer.history);
        
        history.push('/mainmenu');
        

        // push vô trang khác khi login thành thông
        // action.userLogin.history.push('/mainmenu');
        
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



function* getUserSaga(action) {
  console.log(action);
 

  // Call API
  try {
    const { data, status } = yield call(() =>
      userService.getUser(action.keyWord)
    );
    console.log('data',data);
    yield put({
        type: 'GET_USER_SEARCH',
        lstuserSearch: data.content
    })
   



    // push vô trang khác khi login thành thông
    // action.userLogin.history.push('/mainmenu');
  } catch (err) {
    console.log(err.response.data);
  }
  
}


export function* theoDoiGetUser(){
      yield takeLatest("GET_USER_API",getUserSaga );
}



function* addUserProjectSaga(action) {
  console.log(action);

  // Call API
  try {
    const { data, status } = yield call(() =>
      userService.assignUserProject(action.userProject)
    );
    yield put({
      type:'GET_LIST_PROJECT_SAGA'
    })

  } catch (err) {
    console.log(err.response.data);
  }
}

export function* theoDoiAddUserProject() {
  yield takeLatest("ADD_USER_PROJECT_API", addUserProjectSaga);
}