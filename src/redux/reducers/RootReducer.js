import { combineReducers } from "redux"
import userReducer from "./user.reducers"
import orderReducer from "./order.reducers"
import searchReducer from "./search.reducers"

const rootReducer = combineReducers({
    user: userReducer,
    cart: orderReducer,
    search: searchReducer
});

export default rootReducer;