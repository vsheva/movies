import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './component/MovieCard';

function App() {
  const [movies, setMovies] = useState([]); //*

  const getMovies = async () => {
    try {
      const data = await axios
        .get('https://movies-app.prakashsakari.repl.co/api/movies')
        .then(data => {
          setMovies(data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header-movie">Movies</h1>
      </header>

      <main className="main">
        {movies &&
          movies.length > 0 &&
          movies.map(movie => <MovieCard key={movie.id} movi={movie} />)}
      </main>
    </div>
  );
}

export default App;
