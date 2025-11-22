import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch("movies.json") //Here since we are in the same directory we are not writing the whole URL
      .then((response) => response.json()) //here we are converting the response to Json (later they will be available as Javascript objects)
      .then((data) => setMovies(data)); //Here we are assigning them to the data objects.
  }, []);

  //Here prev is the previous state
  /*So if the previous state includes the movieId then we will remove the id, other wise
  we us the spread operator and append the new movieId .
  Here we used !== to remove the existing moveie id*/
  const toogleWatchlist = (movieId) => {
    setWatchlist((prev) =>
      prev.includes(movieId)
        ? prev.filter((id) => id !== movieId)
        : [...prev, movieId]
    );
  };

  return (
    <div className="App">
      <div className="container">
        {
          //Here we are using the Header component imported from the Header.js file
        }
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={<MoviesGrid movies={movies}></MoviesGrid>}
            ></Route>
            <Route path="/watchlist" element={<Watchlist></Watchlist>}></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
