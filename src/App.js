import './app.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieListing from './components/movieListing/MovieListing';
import MovieCard from './components/movieCard/MovieCard';
import MovieDetail from './components/movieDetail/MovieDetail';

function App() {
  return (
    <div className="App">
       <Router>
         <Header></Header>
          <Routes>
            <Route exact path="/" element ={<Home/>} />
            <Route exact path='/movie-listing' element ={<MovieListing/>} />
            <Route path='/movie/:imdbID' element ={<MovieDetail/>} />
          </Routes>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
