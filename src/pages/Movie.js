import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { FilmData } from "../data/filmdata";
import * as RiIcons from "react-icons/ri";
import "./Movie.css";

const Movie = () => {
  const [movieDownload,setMovieDownload] = useState(false)
  const movie = useParams();

  const movie_Details = FilmData.find(
    (item) => item.movie_id == movie.Movie_id
  );
  
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${movie_Details.movie_image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          opacity: "0.9",
        }}
      >
        <div className="container-sm" style={{ width: "100%" }}>
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: "40vw" }}>
              <div className=" text-white shadow rounded-2 p-4 text-center font-monospace fs-3 mt-5 movie-name-year">
                {movie_Details.movie_name}
                <div>
                  <small>({movie_Details.movie_year})</small>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: "50vw" }}>
              <div
                className="text-white shadow rounded-2 p-4 font-monospace mt-5 movie-description"
                style={{ textAlign: "justify" }}
              >
                {movie_Details.movie_description}
              </div>
            </div>
          </div>

          <div className="row justify-content-center font-monospace mt-5 ">
            <div className="col-lg-3 col-md-4 col-sm-6 text-white">
              <div className=" shadow rounded-2 p-2 w-75 text-center movie-propaties my-2 mx-auto">
                {movie_Details.movie_downloads} Downloads
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 text-white">
              <div className=" shadow rounded-2 p-2 w-75 text-center movie-propaties my-2 mx-auto">
                {movie_Details.movie_hour}
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 text-white">
              <div className=" shadow rounded-2 p-2 w-75 text-center movie-propaties my-2 mx-auto">
                Language - {movie_Details.movie_language}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ width: "80%" }}
          className="row  mx-auto row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 px-5 mt-5"
        >
          {movie_Details.movie_type.map((item, index) => (
            <div key={index} className="col text-white ">
              <div className="w-75 shadow rounded-5 pt-2 pb-2 font-monospace text-center movie-gener mt-3 mx-auto text-uppercase">
                {item}
              </div>
            </div>
          ))}
        </div>

        <div
          className="d-flex align-items-center justify-content-end mt-5 pb-4"
          style={{ width: "80%" }}
        >
          <div style={{ width: "150px" }}>
            <div className="text-white shadow rounded-5 pt-2 pb-2 text-center movie-downlod-button">
             
              {
                movieDownload ? <>Downloading...</>: <a href="https://drive.google.com/uc?id=1MGb5PAZAbbYCAxxyrdt9kf19bSWh4YQO&export=download" className="font-monospace" style={{textDecoration:"none",color:"white"}} onClick={()=>setMovieDownload(true)}>Download <RiIcons.RiDownload2Fill /></a>
              }
              
              
               
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Movie;
