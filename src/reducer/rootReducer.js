import { combineReducers } from "redux"
import countedReducer from "./countedReducer";
import userReducer from "./useReducer";

const rootReducer = combineReducers({

    counter:countedReducer,
    user:userReducer
});

export default rootReducer;