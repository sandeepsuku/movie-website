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

export const setBoxOfficeMovies = (boxOfficeMovies) => {
    return {
        type: ActionTypes.SET_BOX_OFFICE_MOVIES,
        payload: boxOfficeMovies,
        
    }
}

export const setMovieTrailer = (movieTrailer) => {
    return {
        type: ActionTypes.SET_MOVIE_TRAILER,
        payload: movieTrailer,

    }
}

