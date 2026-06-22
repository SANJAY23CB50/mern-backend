import { useEffect, useState } from "react";
import API from "../api";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await API.get("/movies");
      setMovies(res.data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;
