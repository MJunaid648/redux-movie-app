import { useEffect } from "react";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  isLoading,
} from "../../features/movies/movieSlice.js";
import MovieListing from "../movie-listing/MovieListing.jsx";
import { useDispatch, useSelector } from "react-redux";
import "./home.scss";
import loaderGif from "../../images/loader.gif";
const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "friends";
  const loading = useSelector(isLoading);
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  console.log(window.history);

  return (
    <main>
      {loading ? (
        <div className="loader">
          <img src={loaderGif} alt="Loading" />
        </div>
      ) : (
        <MovieListing />
      )}
    </main>
  );
};

export default Home;
