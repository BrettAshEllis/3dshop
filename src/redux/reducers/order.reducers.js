import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from "../actions";

export default function orderReducer(state, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, cart: [...state.cart, action.order] };
        case REMOVE_FROM_CART:
            return { ...state, cart: state.cart.filter((val) => val.order_id !== action.order_id) };
        case CLEAR_CART:
            return { ...state, cart: [] }
        default:
            return state;
    }
}