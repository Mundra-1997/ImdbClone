import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
// import Home from './pages/home/home';
// import MovieList from './components/movieList/movieList';
// import Movie from './pages/movieDetail/movie';

function App() {
 
  return (
   
    <div className="App">
     
        <Router>
        <Header />
            <Routes>
              
                <Route path="movie/:id" element={<h1>abcddd</h1>}></Route>
                <Route path="movies/:type" element={<h1>abcdddedfrgg</h1>}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
       
    </div>
  );
}

export default App;
