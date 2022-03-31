export const SET_SEARCH = "SET_SEARCH"
export const CLEAR_SEARCH = "CLEAR_SEARCH"

export const setSearch = (results) => {
    return { type: SET_SEARCH, results }
}

export const clearSearch = () => {
    return { type: CLEAR_SEARCH }
}