import React, { useEffect } from 'react';
import './movieDetail.scss';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setMovieTrailer, setSelectedMovie } from '../../redux/movieSlice'
import MovieTrailer from '../movieTrailer/MovieTrailer';
import Rating from '../rating/rating';


const MovieDetail = () => {
    const store = useSelector((state) => state);
    const movieDetailObj = store.movieReducer.selectedMovie;
    const movieTrailer = store.movieReducer.movieTrailer;

    const dispatch = useDispatch();
    const { imdbID } = useParams()
    useEffect(()=> {
      getMovieDetailObj();   
      getMovieTrailerObj(); 
  
    },[imdbID])
    
    const getMovieDetailObj = () => {
      const movieApiurl = 'https://www.omdbapi.com';
      var params = new URLSearchParams();
      params.append("apikey", '18a01f17');
      params.append("i",  imdbID);
  
      var request = { params: params };
  
      axios.get(movieApiurl , request)
      .then(resp => {
        console.log("getMovieDetail response -> " + resp.data);
        dispatch(setSelectedMovie(resp.data))
      })
      .catch(err => {
           console.error("Error " + err);
      })
    }   
    
    
    const getMovieTrailerObj = () => {

      const movieApiurl = `https://imdb-api.com/en/API/Trailer/k_q930tuy4/${imdbID}`;
      axios.get(movieApiurl)
      .then(resp => {
        console.log("getMovie Trailer response -> " + resp.data.videoTitle);
        dispatch(setMovieTrailer(resp.data))
    })
      .catch(err => {
           console.error("Error " + err);
      })
    } 
    if(movieDetailObj != undefined && movieDetailObj.Ratings != undefined) {
    return (<div className="movie-info">
            <div className="row">
                <div className="movie-info">
                    <img className="img" src={movieDetailObj.Poster} alt="" />
                        <div className="card-body">
                            <h2 className="movie-info">{movieDetailObj.Title}</h2>
                        </div>
                </div>
                <div className="movie-info">
                    <div className="card-body">
                        <h3 className="movie-info">Rated : {movieDetailObj.Rated}</h3>
                        <h3 className="movie-info">Runtime : {movieDetailObj.Runtime}</h3>
                        <h3 className="movie-info">Genre : {movieDetailObj.Genre}</h3>
                        <h3 className="movie-info">Language : {movieDetailObj.Language}</h3>
                        <h3 className="movie-info">Director : {movieDetailObj.Writer}</h3>
                        <h3 className="movie-info">Year : {movieDetailObj.Year}</h3>
                        <h3 className="movie-info">Actors : {movieDetailObj.Actors}</h3>
                        <h3 className="movie-info">Plot : {movieDetailObj.Plot}</h3>
                    </div>
                </div>
                <div>
                <MovieTrailer embeddedLink={movieTrailer.linkEmbed}/>
                </div>
            </div>
            <div className="row">
              {movieDetailObj.Ratings.map(({ Source, Value}) => (
                <Rating title={Source} percent={(Math.floor(Math.random()*(100-1+1))+1)/100}/>
              ))} 
            </div>
    </div> );
};}
export default MovieDetail;