import { Grid } from '@mui/material'
import React, { Component, useState } from 'react'
import MovieCard from '../movieCard/MovieCard'


//export class MovieListing extends Component {
   //  render() {
const MovieListing = (props) => {
  var imageName = 'https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
  const movie1 = {
   "Title": "Jumanji",
   "Year": "2016",
   "Type":"movie"
  }
  /*const [movies, setMovies] = useState([
   {
      "Title": "Jumanji",
      "Year": "2016",
      "Type":"movie"
     } ,
     {
      "Title": "Jumanji",
      "Year": "2017",
      "Type":"movie"
     },
     {
      "Title": "Jumanji",
      "Year": "2018",
      "Type":"movie"
     },
     {
      "Title": "Jumanji",
      "Year": "2019",
      "Type":"movie"
     }
  ])*/
    return (
     <div style={{ color: 'white'}}> 
          <Grid container spacing={3} padding={5}>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               <Grid item lg={3}>
               <MovieCard imageName={imageName} movieValue={movie1.Title} movieYearValue={movie1.Year} movieTypeValue={movie1.Type}></MovieCard>
               </Grid>
               
               
          </Grid>
     </div>
    )
  }



export default MovieListing