import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugService } from "../../Services/CyberbugService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import {history} from "../../util/history"
import {DISPLAY_LOADING, HIDE_LOADING} from "../constants/LoadingConst"
function* createProjectSaga(action) {
  console.log('actionCreateProject',action);
    // hien thi loading
    yield put({
        type: DISPLAY_LOADING,
    })
    yield delay (500);
  try {
    const { data, status } = yield call(() =>
      cyberbugService.createProject(action.newProject)
    );
    // console.log(status);

    // gọi api thành công thì dispatch lên reducer thông qua hàm put
    if (status === STATUS_CODE.SUCCESS) {
      console.log(data);
      history.push('/projectmanagement');
    }
  } catch (err) {
    console.log(err.response.data);
  }

   yield put({
        type: HIDE_LOADING,
    })
}

export function* theoDoiCreateProjectSaga() {
  yield takeLatest("CREATE_PROJECT_SAGA", createProjectSaga);
}

// get all project từ API

function *getListProjectSaga(action) {
    try{
      const {data,status} = yield call(()=>cyberbugService.getListProject());
      
      // lấy dữ liệu từ api về thành công
      if(status === STATUS_CODE.SUCCESS){
        yield put({
          type:'GET_LIST_PROJECT', 
          projectList:data.content
        })
      }
    }catch(err){
      console.log(err);
    }
}

export function* theodoiGetListProjectSaga() {
  yield takeLatest("GET_LIST_PROJECT_SAGA", getListProjectSaga);
}