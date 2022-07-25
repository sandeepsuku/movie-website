import React, { Component } from 'react'
import './movieCard.scss';
//export class MovieCard extends Component { 
 // render() {
  const MovieCard =(props)=> {
    return (
     <div>
       <div className="container">
          <div className='movie'>
            <div>
              <p>{props.movieYearValue}</p>
            </div>
            <div>
              <img src={props.imageName} alt="Jumanji.jpg" />
            </div>
            <div>
               <span>{props.movieTypeValue}</span>
               <h3>Title: {props.movieValue}</h3>
            </div>
           </div> 
         </div>
      </div>
       
       )
  }


export default MovieCard