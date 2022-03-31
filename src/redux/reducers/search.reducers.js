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


// export const fetchChannelRequest = () => {
//     return { type: FETCH_CHANNEL_REQUEST }
// };

// export const fetchChannelSuccess = (channel) => {
//     return { type: FETCH_CHANNEL_SUCCESS, channel }
// };

// export const fetchChannelFailure = (error) => {
//     return { type: FETCH_CHANNEL_FAILURE, error }
// };

// export const fetchChannel = () => {
//     return (dispatch) => {
//         dispatch(fetchChannelRequest())
//         axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&forUsername=${parentSearch}`)
//             .then(response => {
//                 const channel = response.data.map((val) => ({
//                     channel_title: val.items.snippet.title,
//                     channel_id: val.items.id,
//                     channel_desc: val.items.snippet.description,
//                 }));
//                 dispatch(fetchChannelSuccess(channel))
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(fetchChannelFailure(errorMsg))
//             })
//     }
// }