import { Grid } from '@mui/material'
import React, { Component } from 'react'
import MovieCard from '../movieCard/MovieCard'

export class MovieListing extends Component {
  render() {
    return (
     <div style={{ color: 'white'}}> 
          <Grid container spacing={3} padding={5}>
               <Grid item lg={2}>
                  <MovieCard/>
               </Grid>
               <Grid item lg={2}>
                  <MovieCard/>
               </Grid>
               <Grid item lg={2}>
                  <MovieCard/>
               </Grid>
               <Grid item lg={2}>
                  <MovieCard/>
               </Grid>
               <Grid item lg={2}>
                  <MovieCard/>
               </Grid>
               <Grid item lg={2}>
                  <MovieCard/>
               </Grid>
          </Grid>
     </div>
    )
  }
}

export default MovieListing