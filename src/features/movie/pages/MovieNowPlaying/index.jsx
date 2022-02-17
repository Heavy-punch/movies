import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import "./MovieNowPlaying.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMovieNowPlaying } from "../../movieSlice";
import LoadingBox from "../../../../components/LoadingBox";
import MessageBox from "../../../../components/MessageBox";
import Pagination from "../../../../components/Pagination";
import Moviecard from "../../components/MovieCard";
import { useHistory } from "react-router-dom";

function MovieNowPlaying(props) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);
  const history = useHistory();
  const { movieList, loading, error, fillter, pagination } = movies;
  useEffect(() => {
    dispatch(getMovieNowPlaying(fillter));
  }, [dispatch]);

  // console.log(pagination);

  const handleCardClick = (data) => {
    console.log(data.id);
    history.push(`movie/${data.id}`);
  };

  const handlePageChange = (page) => {
    console.log(page);
    dispatch(getMovieNowPlaying({ ...fillter, page }));
  };
  return (
    <div className="movie-now-playing">
      <Row className="justify-content-center movie-now-playing__title">
        Now Playing
      </Row>
      <Container className="movie-now-playing__grid">
        {loading === "pending" ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="warning">{error}</MessageBox>
        ) : (
          movieList?.map((movie) => (
            <Moviecard
              key={movie.id}
              data={movie}
              onCardClick={handleCardClick}
            ></Moviecard>
          ))
        )}
      </Container>
      {movieList && (
        <Container>
          <Pagination
            count={pagination?.totalPages || 1}
            page={pagination?.page || 1}
            onChange={handlePageChange}
          />
        </Container>
      )}
    </div>
  );
}

export default MovieNowPlaying;
