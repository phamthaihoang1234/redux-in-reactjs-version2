// chú ý import không cần dấu {}
import  userReducer  from "./user";
import hobbyReducer from "./hobby";
import { combineReducers } from "redux";


// dùng hàm combineReducer để tổng hợp các reducer
const rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,

});

export default rootReducer;