import { call, put, takeLatest } from "redux-saga/effects";
import {cyberbugService} from "../../Services/CyberbugService"


function* getAllProjectCategorySaga(action) {
  console.log("actionSaga", action);

  const {data,status} = yield call(() => cyberbugService.getAllProjectCategory());
  console.log('data',data);
};

export function* theoDoigetAllProjectCategory(){
    yield takeLatest('GET_ALL_PROJECT_CATEGORY_SAGA', getAllProjectCategorySaga );
}
