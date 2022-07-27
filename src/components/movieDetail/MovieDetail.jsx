import React, { useEffect, useState } from 'react';
import './movieDetail.scss';
import {useParams} from "react-router-dom";
import axios from 'axios';


function MovieDetail () {
    const[movieDetailObj, setMovieDetailObj] = useState('');
    var id = ImdbId();
    useEffect(()=> {
      getMovieDetailObj();   
  
    },[])
    
    const getMovieDetailObj= () => {
      const movieApiurl = 'http://www.omdbapi.com';
      var params = new URLSearchParams();
      params.append("apikey", '18a01f17');
      params.append("i",  id);
  
      var request = { params: params };
  
      axios.get(movieApiurl , request)
      .then(resp => {
         console.log("getMovieDetail response -> " + resp.data);
         setMovieDetailObj(resp.data);
      })
      .catch(err => {
            console.error("Error " + err);
      })
    }     

    return (<div className="movie-info">
            <div class="row">
                <div className="movie-info">
                    <img className="img" src={movieDetailObj.Poster} alt="" />
                        <div className="card-body">
                            <h1 className="movie-info">{movieDetailObj.Title} {ImdbId()}</h1>
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
            </div>
    </div> );
}

function ImdbId() {
    
    let { imdbID } = useParams();
    return imdbID;
}

export default MovieDetail;