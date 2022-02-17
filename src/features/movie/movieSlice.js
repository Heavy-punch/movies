import movieApi from "../../api/appApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getMovieNowPlaying = createAsyncThunk(
  "getMovieNowPlaying",
  async (params, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const movieList = await movieApi.getMovieNowPlaying(params);
    return movieList;
  }
);
export const getMovieDetail = createAsyncThunk(
  "getMovieDetail",
  async (id, thunkAPI) => {
    // thunkAPI.dispatch(...)
    const movie = await movieApi.getMovieDetail(id, {});
    return movie;
  }
);

const initialState = {
  loading: "idle",
  movieList: undefined,
  fillter: { page: 1 },
  pagination: { page: 1, totalPages: 1 },
  error: undefined,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: {
    [getMovieNowPlaying.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getMovieNowPlaying.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.movieList = [].concat(action.payload.results);
      state.pagination = {
        page: action.payload.page,
        totalPages: action.payload.total_pages,
      };
    },
    [getMovieNowPlaying.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },

    [getMovieDetail.pending]: (state, action) => {
      state.loading = "pending";
    },
    [getMovieDetail.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.movieList = [].concat(action.payload);
    },
    [getMovieDetail.rejected]: (state, action) => {
      state.loading = "idle";
      state.error = action.error.message;
    },
  },
});
const { reducer: movieReducer } = movieSlice;
export default movieReducer;
