import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieListing from '../movieListing/MovieListing'
import SerchIcon from './search.svg';
import './home.scss'
import { useSelector, useDispatch } from 'react-redux';
import { setBoxOfficeMovies } from '../../redux/actions/movieActions';


function Home() {
   const[movies, setMovies] = useState([]);
   const[originalmovielist, setOriginalmovies] = useState([]);
   const[moviesInTheaters, setMoviesInTheaters] = useState([]);
   const[searchTerm, setSearchTerm] = useState('');
   const moviesStore = useSelector((state) => state);
   const dispatch = useDispatch();
   const key = 'k_dzk5p0ra';
   //const key = 'k_yqv296j2';

    useEffect(()=> {
      getMovies();  
      getBoxOfficeMovies();  
      getMoviesInTheaters();
    },[])

    const getMovies=() => {
      const movieApiurl = 'https://www.omdbapi.com';
      var params = new URLSearchParams();
      params.append("apikey", '18a01f17');
      params.append("s",  'batman');
      params.append("page",  1);
  
      var request = { params: params };
  
      axios.get(movieApiurl , request)
      .then(resp => {
         console.log("getAllMovies count -> " + resp.data.Search.length);
         setMovies(resp.data.Search);
         setOriginalmovies(resp.data.Search);
      })
      .catch(err => {
            console.error("Error " + err);
      })
    } 

    const getMoviesInTheaters=() => {
      const url = "https://imdb-api.com/en/API/InTheaters/"+key;

      axios.get(url)
      .then(resp => {
        console.log("getMoviesInTheaters count -> " + resp.data.items.length);
        setMoviesInTheaters(resp.data.items);
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

    const getBoxOfficeMovies=() => {
      const url = "https://imdb-api.com/en/API/BoxOffice/" + key;

      axios.get(url)
      .then(resp => {
         console.log("Boxoffice Movies list -> " + resp.data.items);
         dispatch(setBoxOfficeMovies(resp.data.items))
      })
      .catch(err => {
            console.error("Error " + err);
      })
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
          } else {
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

         <MovieListing movies={movies} sectiontitle={'Recommended Movies'} ></MovieListing>
         <MovieListing movies={moviesStore.movieData.boxOfficeMovies} sectiontitle={'Box Office'} ></MovieListing>
         <MovieListing movies={moviesInTheaters} sectiontitle={'In Theaters'} ></MovieListing>

       </div>
    </div>
  )
}

export default Home