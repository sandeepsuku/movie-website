import './app.scss';
import { BrowserRouter as Router,} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieListing from './components/movieListing/MovieListing';
import MovieCard from './components/movieCard/MovieCard';
import MovieDetail from './components/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
       <h1>Movie Website !! </h1>
       <Router>
         <Header></Header>
         <Home></Home>
         <MovieListing></MovieListing>
         <MovieCard></MovieCard>
         <MovieDetail></MovieDetail>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
