import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="left">
        <img alt={movie.movie_id} />
      </div>
      <div className="right">
        <div className="title">{movie.title}</div>
        <div className="title">{movie.category_name}</div>
        <div className="footer">
          <div className="rating">{movie.release_year}</div>
            <button className="favourite-btn">Favourite</button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
