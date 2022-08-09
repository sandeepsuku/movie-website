import React from 'react';

export default function MovieTrailer(props) {
    console.log(props.video);
  return (
    <div><h2>Movie Trailer</h2>
        <iframe src={props.embeddedLink} width={850} height={330}></iframe>
    </div>
  )
}