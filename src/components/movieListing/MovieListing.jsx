import { Grid } from '@mui/material'
import React, { Component, useState } from 'react'
import MovieCard from '../movieCard/MovieCard'


const MovieListing = (props) => {
     if (props.movies && props.movies.length > 0) {
          return (
                    <div style={{ color: 'white'}}> 
                         <Grid container spacing={3} padding={5}>
                              {props.movies.map((movie, index) => 
                                   <Grid item lg={3} key={index}>
                                   <MovieCard imageName={movie.Poster} movieValue={movie.Title} movieYearValue={movie.Year} movieTypeValue={movie.Type}  movieId={movie.imdbID}></MovieCard>
                                   </Grid>
                              )}
                         </Grid>
                    </div>
               
          )
     }
  }

export default MovieListing