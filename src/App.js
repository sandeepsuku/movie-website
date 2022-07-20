import './app.scss';
import { BrowserRouter as Router,} from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
       <h1>Movie Website !! </h1>
       <Router>
         <Header></Header>
         <Home></Home>
         <Footer></Footer>
       </Router>
    </div>
  );
}

export default App;
