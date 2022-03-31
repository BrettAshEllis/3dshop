import { SET_USER, CLEAR_USER } from "../actions";

export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.types) {
        case SET_USER:
            return action.user;
        case CLEAR_USER:
            return null;
        default:
            return state;
    }
}