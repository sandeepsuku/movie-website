import {combineReducers} from 'redux';
import { movieReducer } from './moviesReducer';

const reducers = combineReducers({
    movieData: movieReducer,
})

export default reducers;