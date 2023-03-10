/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css";

const MovieList = (props) => {
  const Movie_id = props.item.movie_id;
  return (
    <Link to={`/Movie/${Movie_id}`} style={{ textDecoration: "none" }}>
      <div
        className="card singleItem mt-4 text-center item border-secondary bg-dark"
        style={{
          opacity: 0.8,
          color: "white",
          height: "323px",
          width: "350px",
          borderWidth: "3px",
        }}
      >
        <img
          className="card-img-top"
          src={props.item.movie_image}
          alt="Card image cap"
        />

        <div className="card-body mt-1 overflow-auto">
          <div className="card-title text-start">
            <span className="movieName ">{props.item.movie_name}</span>
          </div>
          <div className="card-text pt-3 row font-monospace">
            <span className="col text-start">{props.item.movie_language}</span>
            <span className="col text-end"> {props.item.movie_year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieList;
