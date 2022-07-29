import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieListing from '../movieListing/MovieListing'
import SerchIcon from './search.svg';
import './home.scss'


function Home() {
   const[movies, setMovies] = useState([]);
   const[originalmovielist, setOriginalmovies] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=> {
      getMovies();   
  
    },[])


    const getMovies=() => {
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
         setOriginalmovies(resp.data.Search);
      })
      .catch(err => {
            console.error("Error " + err);
      })
    } 
    const getMoviesbysearchTerm=(searchTerm) => {
      let filterlist=movies.filter((value)=>{
       return value.Title.toLowerCase().includes(searchTerm.toLowerCase())
      })
      setMovies(filterlist)
    }
    

  return (
    <div className='Movielist'>
      <div style={{ background : '#0f171e' }}>
    
        <div className='search'>
          <input 
          placeholder="Search for Movies"
          value={searchTerm}
          onChange={(e) => {
          if (e.target.value.trim().length===0){
            console.log("movies",originalmovielist)
            setMovies(originalmovielist)
            
                    }
          else {
            getMoviesbysearchTerm(e.target.value)
          }
          
          setSearchTerm(e.target.value)
          }}
        />
        <img 
          src={SerchIcon}
          alt="search"
        />
        </div>
         <MovieListing movies={movies} ></MovieListing>
       </div>
    </div>
  )
}

export default Home