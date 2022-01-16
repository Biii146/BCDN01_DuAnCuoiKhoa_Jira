import {applyMiddleware, combineReducers, createStore} from 'redux'
import reduxThunk from "redux-thunk";
import createMiddlewareSaga from "redux-saga";
import {ProjectCategoryReducer} from './reducers/ProjectCategoryReducer'
import { rootSaga } from './Saga/rootSaga';
import { HistoryReducer } from './reducers/HistoryReducer';
import { UserLoginJiraReducer } from './reducers/UserJiraReducer';


// middleware saga
const middlewareSaga = createMiddlewareSaga();

const rootReducer = combineReducers({
  // các reducer của ứng dụng
  HistoryReducer,
  UserLoginJiraReducer,
  ProjectCategoryReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, middlewareSaga)
);

middlewareSaga.run(rootSaga);

export default store;
