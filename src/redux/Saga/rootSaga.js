import { all } from "redux-saga/effects";
import * as UserJiraSaga from "../Saga/UserJiraSaga";
import * as ProjectCategorySaga from "./ProjectCategorySaga";
import * as ProjectSaga from "./ProjectSaga"


// import { theoDoiActionGetTaskApi } from "./ListSaga";

export function* rootSaga() {
  yield all([

    UserJiraSaga.theoDoiSignin(),
    UserJiraSaga.theoDoiGetUser(),
    UserJiraSaga.theoDoiAddUserProject(),
    ProjectCategorySaga.theoDoigetAllProjectCategory(),
    ProjectSaga.theoDoiCreateProjectSaga(),
    ProjectSaga.theodoiGetListProjectSaga(),
    ProjectSaga.theoDoiUpdateProjectSaga(),
    ProjectSaga.theoDoiDeleteProject(),
    ProjectSaga.theoDoiGetProjectDetail()
  ]);
}
