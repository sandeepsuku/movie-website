import React, { Component } from 'react'
import {getMovieById, getAllMovies} from '../utils/movieList.js'
import MovieListing from '../movieListing/MovieListing'



export class Home extends Component {

  state = {
    movies: [        
      {   "Title":"Lego Batman",
          "Year":"2017",
          "imdbID":"tt4116284",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
      },
      {
          "Title":"Scary Movie 3",
          "Year":"2003",
          "imdbID":"tt0306047",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BNDE2NTIyMjg2OF5BMl5BanBnXkFtZTYwNDEyMTg3._V1_SX300.jpg"
      },
      {
          "Title":"Scary Movie 4",
          "Year":"2006",
          "imdbID":"tt0362120",
          "Type":"movie",
          "Poster":"https://m.media-amazon.com/images/M/MV5BZmFkMzc2NTctN2U1Ni00MzE5LWJmMzMtYWQ4NjQyY2MzYmM1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
      },
      {
        "Title":"Harry Potter and the Deathly Hallows: Part 2",
        "Year":"2011",
        "imdbID":"tt1201607",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
     },
     {
        "Title":"Harry Potter and the Sorcerer's Stone",
        "Year":"2001",
        "imdbID":"tt0241527",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_SX300.jpg"
     },
     {
        "Title":"Harry Potter and the Chamber of Secrets",
        "Year":"2002",
        "imdbID":"tt0295297",
        "Type":"movie",
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg"
     },
     {
      "Title":"Harry Potter and the Deathly Hallows: Part 1",
      "Year":"2010",
      "imdbID":"tt0926084",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"
   },
   {
      "Title":"Harry Potter and the Half-Blood Prince",
      "Year":"2009",
      "imdbID":"tt0417741",
      "Type":"movie",
      "Poster":"https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"
   }
  ]
  } 

  render() {
    return (
      <div style={{ background : '#0f171e' }}>
         <MovieListing movies={this.state.movies} />
      </div>
    )         
  }
}

export default Home