import { useSelector } from "react-redux";
import { getAllMovies,getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../movie-card/MovieCard";
import "./movieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
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
    let renderShows = "";
    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => (
        <MovieCard key={index} data={show} />
      ))
    ) : (
      <div className="shows-error">
        <h3>{shows.error}</h3>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing;
