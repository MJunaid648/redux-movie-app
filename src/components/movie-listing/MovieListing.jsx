import { useSelector } from "react-redux";
import { getAllmovies } from "../../features/movies/movieSlice";
import MovieCard from "../movie-card/MovieCard";
import './movieListing.scss'

const MovieListing = () => {
  const movies = useSelector(getAllmovies);
  // console.log("Movies: ", movies);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
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
