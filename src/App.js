import React from "react";
import "./App.scss";
import NotFound from "./components/NotFound";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./features/movie";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Switch>
            <Redirect exact from="/" to="/movie" />
            <Route path="/movie" component={Movie} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
