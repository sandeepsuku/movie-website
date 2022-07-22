import React, { Component } from 'react'
import MovieListing from '../movieListing/MovieListing'

export class Home extends Component {
  render() {
    return (
      <div style={{ background : '#0f171e' }}>
         <MovieListing/>
      </div>
    )
  }
}

export default Home