import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './movieCard.scss';
//export class MovieCard extends Component { 
 // render() {
  const MovieCard =(props)=> {
    return (
     <div id=''>
      <Link to={`movie/${props.movieId}`}>
       <div className="container">
          <div className='movie'>
            <div>
              <p>{props.movieYearValue}</p>
            </div>
            <div>
              <img src={props.imageName} alt={props.movieValue}/>
            </div>
            <div>
               <span>{props.movieTypeValue}</span>
               <h3>Title: {props.movieValue}</h3>
            </div>
           </div> 
         </div>
         </Link>
      </div>
       
       )
  }


export default MovieCard