import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const foundMovie = data.movies.find((m) => m.id === Number(id));
        setMovie(foundMovie);
      })
      .catch((err) => console.error("Error fetching movie:", err));
  }, [id]);

  if (!movie)
    return (
      <>
        <NavBar />
        <h1>Loading...</h1>
      </>
    );

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Runtime: {movie.time} minutes</p>
        <div>
          {movie.genres.map((g, index) => (
            <span key={index}>{g} </span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
