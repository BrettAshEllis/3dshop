import { createStore } from "redux";
import rootReducer from "./redux/reducers/RootReducer";

const INITIAL_STATE = {
    user: null,
    search: "",
    cart: [],
};

export default createStore(rootReducer, INITIAL_STATE)