import { useSelector } from "react-redux";
import { getAllmovies } from "../../features/movies/movieSlice";
import MovieCard from "../movie-card/MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllmovies);

  let renderMovies = "";
  renderMovies =
    movies.response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default MovieListing;
