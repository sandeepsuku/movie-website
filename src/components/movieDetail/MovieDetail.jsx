import React from 'react';
import PropTypes from 'prop-types';
import './movieDetail.scss';

const omdbMovieDetailResponse = "{\"Title\":\"Titanic\",\"Year\":\"1997\",\"Rated\":\"PG-13\",\"Released\":\"19 Dec 1997\",\"Runtime\":\"194 min\",\"Genre\":\"Drama, Romance\",\"Director\":\"James Cameron\",\"Writer\":\"James Cameron\",\"Actors\":\"Leonardo DiCaprio, Kate Winslet, Billy Zane\",\"Plot\":\"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.\",\"Language\":\"English, Swedish, Italian, French\",\"Country\":\"United States, Mexico\",\"Awards\":\"Won 11 Oscars. 125 wins & 83 nominations total\",\"Poster\":\"https:\/\/m.media-amazon.com\/images\/M\/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg\",\"Ratings\":[{\"Source\":\"Internet Movie Database\",\"Value\":\"7.9\/10\"},{\"Source\":\"Rotten Tomatoes\",\"Value\":\"87%\"},{\"Source\":\"Metacritic\",\"Value\":\"75\/100\"}],\"Metascore\":\"75\",\"imdbRating\":\"7.9\",\"imdbVotes\":\"1,141,554\",\"imdbID\":\"tt0120338\",\"Type\":\"movie\",\"DVD\":\"08 Jan 2002\",\"BoxOffice\":\"$659,363,944\",\"Production\":\"N\/A\",\"Website\":\"N\/A\",\"Response\":\"True\"}";
let movieDetailObj = JSON.parse(omdbMovieDetailResponse);
const MovieDetail = () => (
    <div className="movie-info">
        <div className="background-black">
            <div class="row">
                <div className="movie-info">
                    <img className="img" src={movieDetailObj.Poster} alt="" />
                        <div className="card-body">
                            <h1 className="movie-info">Titanic</h1>
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
        </div>
    </div>
);

MovieDetail.defaultProps = {
    movie: {}
};

MovieDetail.propTypes = {
    movie: PropTypes.object
};

export default MovieDetail;