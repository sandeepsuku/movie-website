import { Grid } from '@mui/material'
import React, { Component, useState } from 'react'
import MovieCard from '../movieCard/MovieCard'
import '../movieListing/movieListing.scss'


const MovieListing = (props) => {
     if (props.movies && props.movies.length > 0) {
          //This check will be removed once Recommended Movies & In Theaters section are migrated to use new API
          if(!props.sectiontitle.includes('Box Office')){
               return (
                         <div style={{ color: 'white'}}> 
                              <h2> {props.sectiontitle}</h2>
                              <Grid container spacing={3} padding={2}>
                                   {props.movies.map((movie, index) => 
                                        <Grid item lg={2} key={index}>
                                             <MovieCard imageName={movie.Poster} movieValue={movie.Title} movieYearValue={movie.Year} movieTypeValue={movie.Type}  movieId={movie.imdbID}></MovieCard>
                                        </Grid>
                                   )}
                              </Grid>
                         </div>
                    
                    )
           }else {
               return (
                    <div style={{ color: 'white'}}> 
                         <h2> {props.sectiontitle}</h2>
                         <Grid container spacing={3} padding={2}>
                              {props.movies.map((movie, index) => 
                                   <Grid item lg={2} key={index}>
                                        <MovieCard imageName={movie.image} movieValue={movie.title} movieYearValue={movie.Year} movieTypeValue={'Movie'}  movieId={movie.id}></MovieCard>
                                   </Grid>
                              )}
                         </Grid>
                    </div>
               
               )

           }
     }
     else {
          return(
               <div className='Nodatafound'>
               <h1>No movies found</h1>
               </div>
          )
     }
  }

export default MovieListing