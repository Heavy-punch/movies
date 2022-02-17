import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import MovieNowPlaying from "./pages/MovieNowPlaying";
import NotFound from "../../components/NotFound";

function Movie(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={MovieNowPlaying} />
      <Route exact path={`${match.url}/:id`} component={MovieDetail} />

      <Route component={NotFound} />
    </Switch>
  );
}

export default Movie;
