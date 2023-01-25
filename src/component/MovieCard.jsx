import React from 'react';
import './MovieCard.css';

function MovieCard({ movi }) {
  const { name, imdb_rating, duration, img_link, genre } = movi;
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="card-image" src={img_link} alt="movie-card" />
      </div>
      <div className="card-details">
        <div>
          <span className="title"> {name}</span>
        </div>
        <div>
          <span className="genre">Genre: {genre}</span>
        </div>
        <div className="rating">
          <span>Rating: {imdb_rating}</span>
          <span>{duration} mins</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
