import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from './sagas/rootSaga'
import { HistoryReducer } from './reducers/HistoryReducer'

const middleWareSaga = createMiddleWareSaga()

const rootReducer = combineReducers({
    HistoryReducer: HistoryReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk,middleWareSaga))

middleWareSaga.run(rootSaga);

export default store;

