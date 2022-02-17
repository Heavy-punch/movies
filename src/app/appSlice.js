import appApi from "../api/appApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// export const getMovieNowPlaying = createAsyncThunk(
//   "getMovieNowPlaying",
//   async (params, thunkAPI) => {
//     // thunkAPI.dispatch(...)
//     const movieList = await appApi.getMovieNowPlaying(params);
//     return movieList;
//   }
// );
// export const getMovieDetail = createAsyncThunk(
//   "getMovieDetail",
//   async (id, params, thunkAPI) => {
//     // thunkAPI.dispatch(...)
//     const movie = await appApi.getMovieDetail(id, params);
//     return movie;
//   }
// );

const initialState = {
  loading: "idle",
  movieList: undefined,
  error: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: {
    // [getMovieNowPlaying.pending]: (state, action) => {
    //   state.loading = "pending";
    // },
    // [getMovieNowPlaying.fulfilled]: (state, action) => {
    //   state.loading = "idle";
    //   state.movieList = [].concat(action.payload.results);
    // },
    // [getMovieNowPlaying.rejected]: (state, action) => {
    //   state.loading = "idle";
    //   state.error = action.error.message;
    // },
    // [getMovieDetail.pending]: (state, action) => {
    //   state.loading = "pending";
    // },
    // [getMovieDetail.fulfilled]: (state, action) => {
    //   state.loading = "idle";
    //   state.movieList = state.movieList = [].concat(action.payload);
    // },
    // [getMovieDetail.rejected]: (state, action) => {
    //   state.loading = "idle";
    //   state.error = action.error.message;
    // },
  },
});
const { reducer: appReducer } = appSlice;
export default appReducer;
