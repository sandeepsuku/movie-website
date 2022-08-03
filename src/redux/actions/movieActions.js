import { ActionTypes } from "../constants/actions-types"
export const setMovies = (movies) => {
    return {
        type: ActionTypes.SET_MOVIES,
        payload: movies,
        
    }
}

export const setSelectedMovie = (selectedMovie) => {
    return {
        type: ActionTypes.SELECTED_MOVIE,
        payload: selectedMovie,
        
    }
}