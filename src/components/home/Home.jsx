import React, { Component } from 'react'
import {getMovieById, getAllMovies} from '../utils/movieList.js'

const allMovies = getAllMovies();
console.log(allMovies);
const movieData = getMovieById('tt0314166');
console.log(movieData);

import MovieListing from '../movieListing/MovieListing'
export class Home extends Component {
  render() {
    return (
      <div style={{ background : '#0f171e' }}>
         <MovieListing/>
      </div>
    )
  }
}

export default Home