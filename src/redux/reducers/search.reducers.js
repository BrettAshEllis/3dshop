import {
    SET_SEARCH,
    CLEAR_SEARCH
} from "../actions";

export default function searchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, search: [...state.search, action.results] };
        case CLEAR_SEARCH:
            return { ...state, search: [] }
        default:
            return state;
    }
}