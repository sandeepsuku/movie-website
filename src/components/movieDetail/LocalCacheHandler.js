export class LocalCacheHandler{

    static moviesDetails = new Map()
    static moviesTrailers = new Map() 
    static addMovie(movie) {
       this.moviesDetails.set(movie.imdbID,movie);
    }
    static getMovieById(id)
    {
       return this.moviesDetails.get(id);
    }
    static clearMoviesMap()
    {
        this.moviesDetails.clear()
    }
    static addMovieTrailor(movieTrailer) {
      
       this.moviesTrailers.set(movieTrailer.imDbId,movieTrailer);
    }
    static getMovieTrailerById(id)
    {
       return this.moviesTrailers.get(id);
    }
    static clearMoviesTrailers()
    {
        this.moviesTrailers.clear()
    }
   }