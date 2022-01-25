import { call, delay, put, takeLatest } from "redux-saga/effects";
import ProjectManagement from "../../pages/ProjectManagement/ProjectManagement";
import { cyberbugService } from "../../Services/CyberbugService";
import { projectService } from "../../Services/ProjectService";
import { STATUS_CODE } from "../../util/constants/settingSystem";
import {history} from "../../util/history"
import { notifiFunction } from "../../util/Notification/Notification";
import {DISPLAY_LOADING, HIDE_LOADING} from "../constants/LoadingConst"
import { Alert } from "antd";

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

      notifiFunction("success", "Add project successfuly!");
      // history.push('/projectmanagement');
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




// update project

function* updateProjectSaga(action) {
  // console.log("action123", action);
  // hien thi loading
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);
  try {
    const { data, status } = yield call(() =>
      cyberbugService.updateProject(action.projectUpdate)
    );
    // console.log(status);

    // gọi api thành công thì dispatch lên reducer thông qua hàm put
    if (status === STATUS_CODE.SUCCESS) {
      console.log(data);
      notifiFunction("success", "Update project successfuly!");
    }
    // chạy lại khi đã update dữ liệu
    yield put({
      type:'GET_LIST_PROJECT_SAGA',
    })
    yield put({
        type:'CLOSE_DRAWER'
    })
  } catch (err) {
    console.log(err.response.data);
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiUpdateProjectSaga() {
  yield takeLatest("UPDATE_PROJECT_SAGA", updateProjectSaga);
}


// Delete Project

function* deleteProjectSaga(action) {
  // console.log("action123", action);
  // hien thi loading
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);
  try {
    const { data, status } = yield call(() =>
      projectService.deleteProject(action.idProject)
    );
    // console.log(status);

    // gọi api thành công thì dispatch lên reducer thông qua hàm put
    if (status === STATUS_CODE.SUCCESS) {
      console.log(data);

      notifiFunction('success','Delete project successfuly!')
    }
    // chạy lại khi đã update dữ liệu
    yield put({
      type: "GET_LIST_PROJECT_SAGA",
    });
    yield put({
      type: "CLOSE_DRAWER",
    });
  } catch (err) {
    console.log(err.response.data);
    notifiFunction('error', 'Delete project fail')
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiDeleteProject() {
  yield takeLatest("DELETE_PROJECT_SAGA", deleteProjectSaga);
}




// project detail

function* getProjectDetailSaga(action) {
  // console.log("action123", action);
  // hien thi loading
  yield put({
    type: DISPLAY_LOADING,
  });
  yield delay(500);
  try {
    const { data, status } = yield call(() =>
      projectService.getProjectDetail(action.projectId)
    );
    console.log("data",data);
    
    // lấy thành công thì đưa dữ liệu lên redux
   yield put({
     type: 'PUT_PROJECT_DETAIL',
     projectDetail: data.content
   })
    
  } catch (err) {
    alert("You have not selected a project!");
  }

  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiGetProjectDetail() {
  yield takeLatest("GET_PROJECT_DETAIL", getProjectDetailSaga);
}