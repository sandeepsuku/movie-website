import { Grid } from '@mui/material'
import React from 'react'
import MovieCard from '../movieCard/MovieCard'
import '../movieListing/movieListing.scss'

const MovieListing = (props) => {
     if (props.movies && props.movies.length > 0) {
          return (
               <div style={{ color: 'white'}}> 
                    <h2> {props.sectiontitle}</h2>
                    <Grid container spacing={3} padding={2}>
                         {props.movies.map(function(movie, index) { 
                              var imageName, movieTypeValue, movieId;
                              if (!props.sectiontitle.includes('Recommended Movies') ) {
                                   imageName=movie.image;
                                   movieTypeValue=movie.genres;
                                   movieId=movie.id;
                              } else {
                                   imageName=movie.Poster;     
                                   movieTypeValue=movie.Type;
                                   movieId=movie.imdbID;
                              } 
                              return (
                              <Grid item lg={2} key={index}>
                                   <MovieCard imageName={imageName} movieValue={movie.Title} movieYearValue={movie.Year} movieTypeValue={movieTypeValue}  movieId={movieId}></MovieCard>
                              </Grid> )
                         })}
                    </Grid>
               </div>
          )
     } else {
          return(
               <div className='Nodatafound'>
               <h1>No movies found</h1>
               </div>
          )
     }
  }

export default MovieListing
