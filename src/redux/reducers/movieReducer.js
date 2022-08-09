import { ActionTypes } from "../constants/actions-types"

const initialState = {
    movies:[],
    selectedMovie:{},
    boxOfficeMovies:[],
    movieTrailer:{}

}
export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_MOVIES:
            return state;
        case ActionTypes.SELECTED_MOVIE:
            return {...state, selectedMovie:payload};
        case ActionTypes.SET_BOX_OFFICE_MOVIES:
            return {...state, boxOfficeMovies:payload}   
        case ActionTypes.SET_MOVIE_TRAILER:
            return {...state, movieTrailer:payload}     
        default:
            return state;
    }
}