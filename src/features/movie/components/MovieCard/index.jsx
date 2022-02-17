import React from "react";
import { convertImageUrl } from "../../../../utils/common";
import "./MovieCard.scss";

function Moviecard(props) {
  const { data, onCardClick } = props;
  return (
    <div className="movie-card">
      <img
        className="movie-card__img"
        src={convertImageUrl(data.poster_path)}
        alt="..."
        onClick={() => onCardClick(data)}
      ></img>
      this is card + {data.id}
    </div>
  );
}

export default Moviecard;
