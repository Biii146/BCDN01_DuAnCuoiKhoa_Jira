import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from './sagas/rootSaga'

const middleWareSaga = createMiddleWareSaga()

const rootReducer = combineReducers({
    // các states của ứng dụng
})

const store = createStore(rootReducer,applyMiddleware(thunk,middleWareSaga))

middleWareSaga.run(rootSaga);

export default store;

