import React, { useState, useEffect } from "react";
import ParticlesBackground from "../component/ParticlesBackground";
import "./FilmList.css";
import NavBar from "../component/NavBar";
import MovieList from "../component/MovieList";
import { FilmData } from "../data/filmdata";
import { Row, Col } from "react-bootstrap";

const FilmList = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [change,SetChange] = useState(null);
  const [year,setYear] = useState(null)
  const [language,setLanguage] = useState(null)
  const [gener,setGener] = useState(null)
  const [flag,setFlag] = useState(false)
  const [dataSet, setDataSet] = useState(FilmData);


  useEffect(() => {
    if (change === 'term') {
      setYear(null)
      setLanguage(null)
      setGener(null)
      const filteredProducts = FilmData.filter((film) =>
        film.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setDataSet(filteredProducts);
    }else if(change === 'year'){
      setSearchTerm(null)
      setLanguage(null)
      setGener(null)
      const filteredProducts = FilmData.filter((film) =>
        //film.movie_year.includes(year)
        film.movie_year === year
      );
       setDataSet(filteredProducts);
      // console.log(filteredProducts);
    }else if(change === 'language'){
      setSearchTerm(null)
      setYear(null)
      setGener(null)
      const filteredProducts = FilmData.filter((film) =>
        film.movie_language.toLowerCase().includes(language.toLowerCase())
      );
  
      setDataSet(filteredProducts);
    }
    else if(change === 'gener'){
      setSearchTerm(null)
      setYear(null)
      setLanguage(null)
      const filteredProducts = FilmData.filter((film) =>
        // film.movie_type.toLowerCase().includes(language.toLowerCase())
        ( film.movie_type.filter((item) =>
        item.toLowerCase().includes(gener.toLowerCase())
        
        )).length !== 0
      );
  
      setDataSet(filteredProducts);
    }
  
  }, [flag]);

  return (
    <div className="entire">
      <div className="particle">
        <ParticlesBackground />
      </div>
      <div className="content">
        <NavBar setSearchTerm={setSearchTerm} flag={flag} setFlag={setFlag} SetChange={SetChange} setYear={setYear} setLanguage={setLanguage} setGener={setGener}/>
      </div>
      <div className="movieList">
        <Row xs={1} md={2} lg={3} xl={4} className="g-3 mx-auto">
          {dataSet.map((item) => (
            <Col key={item.movie_id} className="movieItem ">
              <MovieList item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FilmList;
