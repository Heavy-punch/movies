import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import LoadingBox from "../../../../components/LoadingBox";
import MessageBox from "../../../../components/MessageBox";
import { convertImageUrl } from "../../../../utils/common";
import { getMovieDetail } from "../../movieSlice";
import "./MovieDetail.scss";

function MovieDetail(props) {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);
  const params = useParams();

  useEffect(() => {
    dispatch(getMovieDetail(params.id));
  }, [dispatch]);

  const { movieList, loading, error } = movies;

  console.log(movies);
  return (
    <div className="movie-detail">
      {loading === "pending" ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="warning">{error}</MessageBox>
      ) : (
        movieList && (
          <Container>
            <Row>
              <Col className="movie-detail__img" lg="3" md="3" sm="12">
                <img src={convertImageUrl(movieList[0].poster_path)}></img>
              </Col>
              <Col className="movie-detail__content" lg="9" md="9" sm="12">
                <Row className="movie-detail__title">
                  {movieList[0].title +
                    " " +
                    `(` +
                    movieList[0].release_date.slice(0, 4) +
                    `)`}
                </Row>
                <Row className="movie-detail__type">
                  {movieList[0].genres?.reduce(
                    (x, y) => x + `${y.name}, `,
                    ""
                  ) +
                    ` . ` +
                    movieList[0]?.runtime +
                    " minutes"}
                </Row>
                <Row className="movie-detail__rate">
                  <ul>
                    <li>
                      <ion-icon name="grid-outline"></ion-icon>
                    </li>
                    <li>
                      <ion-icon name="heart-outline"></ion-icon>
                    </li>
                    <li>
                      <ion-icon name="bookmark-outline"></ion-icon>
                    </li>
                    <li>
                      <ion-icon name="star-outline"></ion-icon>
                    </li>
                  </ul>
                </Row>
                <Row className="movie-detail__tagline">
                  {movieList[0].tagline}
                </Row>
                <Row className="movie-detail__overview">
                  <p className="movie-detail__overview--strong">overview</p>
                  {movieList[0].overview}
                </Row>
                <Row className="movie-detail__creator">Creator</Row>
              </Col>
            </Row>
          </Container>
        )
      )}
    </div>
  );
}

export default MovieDetail;
