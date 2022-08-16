import { render, screen } from '@testing-library/react';
import MovieListing from '../movieListing';
import '@testing-library/jest-dom/extend-expect';

function showTrailerModel () {
  console.log("here")
}

let movie = null
let movies = null
let nomovie = 'No movies found'

beforeAll(() =>{
  movie = {
    "Title": "Harry Potter",
    "movieValue": "Harry Potter",
    "Year": "2011", 
    "movieYearValue": "2011", 
    "imdbID": "tt1201607",  
    "movieId": "tt1201607",
    "movieRating": "50",
    "movieTypeValue": "50",
    "movieRatingValue": "50",
    "showTrailer": "false",
    "Type": "movie",
    "sectiontitle": "Box Office",
    "imageName": "imageName",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
  }

  movies = [
      {
      "title": "Harry Potter",
      "gross": 50000,
      "rank": 33,
      "movieValue": "Harry Potter",
      "Year": "2011", 
      "movieYearValue": "2011", 
      "imdbID": "tt1201607",  
      "id": "tt1201607",
      "movieRatingValue": "50",
      "movieRating": "50",
      "movieTypeValue": "50",
      "showTrailer": "false",
      "Type": "movie",
      "sectiontitle": "Box Office",
      "image":  "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    }
  ]  
})

test('renders No Movies', () => {
  render(
        <MovieListing
        movies={movie}
        sectiontitle={"Recommended Movies"}
        showTrailer={showTrailerModel}
      ></MovieListing>
  )
  const movieElement = screen.getByText(nomovie);
  expect(movieElement).toBeInTheDocument();
});

