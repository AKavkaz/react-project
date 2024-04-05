import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from './pages/Movies';
import Nav from "./components/Nav";
import MovieInfo from './pages/MovieInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:query" element={<Movies />}/>
          <Route path="/movie/:id" element={<MovieInfo />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
