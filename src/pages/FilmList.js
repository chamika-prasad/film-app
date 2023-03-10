/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import ParticlesBackground from "../component/ParticlesBackground";
import "./FilmList.css";
import NavBar from "../component/NavBar";
import MovieList from "../component/MovieList";
import { FilmData } from "../data/filmdata";
import Footer from "../component/footer";

const FilmList = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [change, SetChange] = useState(null);
  const [year, setYear] = useState(null);
  const [language, setLanguage] = useState(null);
  const [gener, setGener] = useState(null);
  const [flag, setFlag] = useState(false);
  const [dataSet, setDataSet] = useState(FilmData);
  const isSEarchBarShow = true;

  useEffect(() => {
    if (change === "term") {
      setYear(null);
      setLanguage(null);
      setGener(null);
      const filteredProducts = FilmData.filter((film) =>
        film.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setDataSet(filteredProducts);
    } else if (change === "year") {
      setSearchTerm(null);
      setLanguage(null);
      setGener(null);
      const filteredProducts = FilmData.filter(
        (film) =>
          //film.movie_year.includes(year)
          film.movie_year === year
      );
      setDataSet(filteredProducts);
      // console.log(filteredProducts);
    } else if (change === "language") {
      setSearchTerm(null);
      setYear(null);
      setGener(null);
      const filteredProducts = FilmData.filter((film) =>
        film.movie_language.toLowerCase().includes(language.toLowerCase())
      );

      setDataSet(filteredProducts);
    } else if (change === "gener") {
      setSearchTerm(null);
      setYear(null);
      setLanguage(null);
      const filteredProducts = FilmData.filter(
        (film) =>
          film.movie_type.filter((item) =>
            item.toLowerCase().includes(gener.toLowerCase())
          ).length !== 0
      );

      setDataSet(filteredProducts);
    }
  }, [flag]);

  return (

      <div className="entire ">
      {/* overflow-auto */}
        <div className="particle">
          <ParticlesBackground />
        </div>
        <div className="content">
          <NavBar
            setSearchTerm={setSearchTerm}
            flag={flag}
            setFlag={setFlag}
            SetChange={SetChange}
            setYear={setYear}
            setLanguage={setLanguage}
            setGener={setGener}
            isSEarchBarShow={isSEarchBarShow}
          />
        </div>

        <div className="row pt-4 pb-5 mx-auto">
          {dataSet.map((item) => (
            <div
              className="col d-flex justify-content-center movieItem"
              key={item.id}
            >
              <MovieList item={item} />
            </div>
          ))}
        </div>
        <div className="footer position-absolute ">
    <Footer />
  </div>
      </div>
  );
};

export default FilmList;
