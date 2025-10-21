import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setMovies(data.movies))
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default Home;
