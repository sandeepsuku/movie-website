import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import MovieListing from '../movieListing/MovieListing'


function Home() {
   const[movies, setMovies] = useState('');

    useEffect(()=> {
      getMovies();   
  
    },[])


    const getMovies= () => {
      const movieApiurl = 'https://www.omdbapi.com';
      var params = new URLSearchParams();
      params.append("apikey", '18a01f17');
      params.append("s",  'harry');
      params.append("page",  1);
  
      var request = { params: params };
  
      axios.get(movieApiurl , request)
      .then(resp => {
         console.log("getAllMovies response list -> " + resp.data.Search);
         setMovies(resp.data.Search);
      })
      .catch(err => {
            console.error("Error " + err);
      })
    } 
    

  return (
   <div style={{ background : '#0f171e' }}>
        <MovieListing movies={movies} ></MovieListing>
   </div>
  )
}

export default Home