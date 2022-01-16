import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberbugService } from "../../Services/CyberbugService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
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
