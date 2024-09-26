import {applyMiddleware, createStore} from "redux"
import rootReducer from "../reducer/rootReducer";
// import {thunk}  from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga/rootsaga";
// const store= createStore(rootReducer,
//      applyMiddleware(thunk));


const sagaMiddleware = createSagaMiddleware()
const store= createStore(rootReducer,
           applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store;