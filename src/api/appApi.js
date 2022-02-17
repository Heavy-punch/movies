import axiosClient from "./axiosClient";

const appApi = {
  getMovieDetail: (id, params) => {
    const url = `/movie/${id}`;
    return axiosClient.get(url, { params });
  },
  getMovieNowPlaying: (params) => {
    const url = "/movie/now_playing";
    return axiosClient.get(url, { params });
  },
};

export default appApi;
