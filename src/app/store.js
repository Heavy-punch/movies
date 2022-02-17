import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import movieReducer from "../features/movie/movieSlice";

const rootReducer = {
  app: appReducer,
  movie: movieReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
