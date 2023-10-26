import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/APIs/MovieApi";
import { APIKey } from "../../common/APIs/MovieApiKey";
export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "shows/fetchAsyncShows",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMovieOrShowDetails = createAsyncThunk(
  "movie/fetchAsyncMovieOrShowDetails",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  }
);
const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
  loading: false,
};
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, (state) => {
      console.log("Pending");
      return { ...state, loading: true };
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("Fetched movies successfully");
      return { ...state, movies: payload, loading: false };
    });
    builder.addCase(fetchAsyncMovies.rejected, (state) => {
      console.log("Rejected");
      return { ...state, loading: false };
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      console.log("Fetched shows successfully");
      return { ...state, shows: payload, loading: false };
    });
    builder.addCase(
      fetchAsyncMovieOrShowDetails.fulfilled,
      (state, { payload }) => {
        console.log("Details fetched successfully");
        return { ...state, selectedMovieOrShow: payload, loading: false };
      }
    );
  },
});
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const isLoading = (state) => state.movies.loading;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
