import * as ProjectCategorySaga from "./ProjectCategorySaga";

import { all } from "redux-saga/effects";
import * as UserJiraSaga from "../Saga/UserJiraSaga";

// import { theoDoiActionGetTaskApi } from "./ListSaga";

export function* rootSaga() {
  yield all([

    
    ProjectCategorySaga.theoDoigetAllProjectCategory(),
    UserJiraSaga.theoDoiSignin()
  ]);
}
