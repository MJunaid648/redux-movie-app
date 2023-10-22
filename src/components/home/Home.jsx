import { useEffect } from "react";
import MovieListing from "../movie-listing/MovieListing";
import movieApi from "../../common/APIs/MovieApi";
import { APIKey } from "../../common/APIs/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=series`)
        .catch((err) => {
          console.log("err", err);
        });
      // console.log("response is:", response);
      dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
