function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Duration: {movie.duration} mins</p>
      <p>Genre: {movie.genre}</p>
    </div>
  );
}

export default MovieCard;
