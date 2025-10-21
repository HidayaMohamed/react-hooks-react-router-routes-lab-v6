import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setDirectors(data.directors))
      .catch((err) => console.error("Error fetching directors:", err));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((dir) => (
          <article key={dir.id}>
            <h2>{dir.name}</h2>
            <ul>
              {dir.movies.map((movie, i) => (
                <li key={i}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;
