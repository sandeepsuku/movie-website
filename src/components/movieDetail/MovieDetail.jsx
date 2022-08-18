import React, { useEffect } from 'react';
import './movieDetail.scss';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setMovieTrailer, setSelectedMovie, setUserRatings } from '../../redux/movieSlice'
import MovieTrailer from '../movieTrailer/MovieTrailer';
import Rating from '../rating/rating';
import {Link} from "react-router-dom";
import UserRating from '../userRating/UserRating';
import { Grid } from '@mui/material'

const MovieDetail = () => {
    const store = useSelector((state) => state);
    const movieDetailObj = store.movieReducer.selectedMovie;
    const movieTrailer = store.movieReducer.movieTrailer;
    const userReviews = store.movieReducer.userRatings;
    const dispatch = useDispatch();
    const { imdbID } = useParams()
    useEffect(()=> {
      getMovieDetailObj();   
      getMovieTrailerObj(); 
      getUserRating();
    },[imdbID])
    
    const getMovieDetailObj = () => {
      var params = new URLSearchParams();
      params.append("apikey", '18a01f17');
      params.append("i",  imdbID);
  
      var request = { params: params };
  
      axios.get(process.env.REACT_APP_OMDAPI_URL , request)
      .then(resp => {
        dispatch(setSelectedMovie(resp.data))
      })
      .catch(err => {
           console.error("Error " + err);
      })
    }   
    
    
    const getMovieTrailerObj = () => {
      axios.get(process.env.REACT_APP_TRAILER_URL + imdbID)
      .then(resp => {
        dispatch(setMovieTrailer(resp.data))
    })
      .catch(err => {
           console.error("Error " + err);
      })
    }
    
    const getUserRating = () => {
      axios.get(process.env.REACT_APP_USERRATING_URL + imdbID)
      .then(resp => {
        dispatch(setUserRatings(resp.data.items))
    })
      .catch(err => {
           console.error("Error " + err);
      })
    }
    
    if(movieDetailObj && movieDetailObj.Ratings && userReviews) {
    return (<div className="movie-info">
            <div className="row-link">
              <Link to='/movie-website/'>Go to Home Page</Link>
            </div>
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
            {userReviews.map((rating, index) => (<Grid item lg={6} sx={{ padding :2}}  key={index}> <UserRating key={index} rating={rating}/> </Grid> ))}
    </div> );
};}
export default MovieDetail;