import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    // các states của ứng dụng
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

