import { call, put, takeLatest } from "redux-saga/effects";
import {cyberbugService} from "../../Services/CyberbugService"
import { STATUS_CODE } from "../../util/constants/settingSystem";
import { GET_ALL_PROJECT_CATEGORY } from "../constants/JiraCyber";


function* getAllProjectCategorySaga(action) {
  console.log('actionSaga', action);
  try{
  const {data,status} = yield call(() => cyberbugService.getAllProjectCategory());
  // console.log(status);
 

  // gọi api thành công thì dispatch lên reducer thông qua hàm put
  if(status === STATUS_CODE.SUCCESS){
  yield put({
    type: GET_ALL_PROJECT_CATEGORY,
    data: data.content,
  });
}
  
}catch(err){
  console.log(err.response.data);
}
};

export function* theoDoigetAllProjectCategory(){
    yield takeLatest('GET_ALL_PROJECT_CATEGORY_SAGA', getAllProjectCategorySaga );
}
