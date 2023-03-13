import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ coverImg, title, summary, genres, id }) => {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 233 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul>
        {genres.map((genre, idx) => (
          <li key={idx}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
