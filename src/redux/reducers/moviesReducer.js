import { ActionTypes } from "../constants/actions-types"

const initialState = {
    movies:[],
    selectedMovie:{}
}
export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_MOVIES:
            return state;
        case ActionTypes.SELECTED_MOVIE:
            return {...state, selectedMovie:payload};
        default:
            return state;
    }
}