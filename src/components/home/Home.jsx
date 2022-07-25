import React, { Component } from 'react'
import {getMovieById, getAllMovies} from '../utils/movieList.js'

const allMovies = getAllMovies();
console.log(allMovies);
const movieData = getMovieById('tt0314166');
console.log(movieData);

export class Home extends Component {
  render() {
    return (
      <div>{movieData.Title}</div>
    )
  }
}

export default Home